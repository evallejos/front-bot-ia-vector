import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-menu-restaurants-app';
  testing = signal<string>("");
  markdown = `## Markdown __rulez__!
  ---

  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescriptaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  \`\`\`

  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet

  ### Blockquote
  > Blockquote to the max`;

  constructor() {
    this.setTesting();
  }

  setTesting() {
    this.testing.set("hola")
    console.log(this.testing())
  }

}
