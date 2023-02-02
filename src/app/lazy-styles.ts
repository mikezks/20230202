import {
  Component,
  inject,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lazy-styles',
  standalone: true,
  template: ``,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .my-red-background {
        background-color: red;
        color: white;
        padding: 10px;
      }
    `,
  ],
})
export class LazyStylesLoader {}

export function injectLazyStylesLoader(): () => void {
  const vc = inject(ViewContainerRef);

  return () => vc.createComponent(LazyStylesLoader).destroy();
}
