import { Component, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IaService } from 'src/app/services/ia.service';

export interface Message {
  type: string;
  message: string;
}

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.scss']
})

export class HelpSupportComponent {
  isOpen = false;
  loading = false;
  iaService = inject(IaService);
  messages: Message[] = [];
  chatForm = new FormGroup({
    message: new FormControl('', [Validators.required]),
  });
  @ViewChild('scrollMe') private myScrollContainer: any;

  constructor() {
    this.messages.push({
      type: 'bot',
      message: 'Hola, soy tu agente de apoyo. ¿Te puedo ayudar en algo?',
    });
  }

  openSupportPopup() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const sentMessage = this.chatForm.value.message!;
    this.loading = true;
    this.messages.push({
      type: 'user',
      message: sentMessage,
    });
    this.queryLLM(sentMessage);
    this.chatForm.reset();
    this.scrollToBottom();

  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop =
          this.myScrollContainer.nativeElement.scrollHeight + 500;
      } catch (err) { }
    }, 150);
  }

  queryLLM = (question: string) => {
    this.iaService.answerQuestion(question).subscribe((response) => {
      this.loading = false;
      const { content } = response
      this.iaService.setState({ response: content, loading: false });
    })
  }
}
