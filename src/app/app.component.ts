import { Component, inject, signal } from '@angular/core';
import { IaService } from './services/ia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  iaService = inject(IaService);
  title = 'front-menu-restaurants-app';
  markdown = signal<string>("");
  loading = signal<boolean>(false);
  constructor() {
    this.subscribeChatBot();
  }




  subscribeChatBot = async () => {
    this.iaService.getState().subscribe(({ response, loading, isMarkdown }) => {
      if (!loading && isMarkdown) {
        this.loading.set(true);
        setTimeout(() => {
          this.loading.set(false);
          this.markdown.set(response);
        }, 2000);
      }
    })
  }

}
