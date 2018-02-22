# MultiThemeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Idea

For libraries like Material, it supports multiple themes with `mixin`. Hence, those apps use Material can have this feature out-of-the-box.

Meanwhile, for some libraries, which do not support `mixin`, by importing the entire styles, this strategy prevents us from hosting multiple themes side-by-side. Hence, I try 2 approaches

Class binding
``` html
<h2 [class]="styleClass">This is a content styled with [class] binding</h2>
```

Set fixed class to the component and bind the href of a HTMLLinkElement at runtime
``` html
<h2 class="theme-text">This content has fixed "theme-text" style</h2>
```

My strategy is as below
``` ts
export class AppComponent {
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
```

## Development

Run `ng serve` for a dev server

## Build

Run `npm run build` for final build outputs, including renaming of lazy style scripts (remove hash from .bundle.css). This internally calls `ng build --prod --aot`. The `--aot` will add hash to the bundle name, that's why we need a `postbuild` step to remove the hash.
