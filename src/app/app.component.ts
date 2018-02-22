import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  styleClass: string;
  scriptElement: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.scriptElement = this.document.createElement('link');
    this.scriptElement.rel = 'stylesheet';
    this.document.querySelector('head').appendChild(this.scriptElement);
  }

  setStaticClass(className) {
    this.styleClass = className;
  }

  setScriptElement(scriptPrefix: string) {
    const scriptName = scriptPrefix ? `${scriptPrefix}.bundle.css` : '';
    this.scriptElement.href = scriptName;
  }
}
