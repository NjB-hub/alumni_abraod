import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {
  private isShown: boolean = false;
  constructor(private element: ElementRef) {
    this.setup();
   }
   toggle(span: HTMLElement) {
    this.isShown = !this.isShown;
    if (this.isShown) {
      this.element.nativeElement.setAttribute('type', 'icon');
      span.innerHTML = '<i class="fa fa-eye-slash" id="togglePassword" style="position:relative; right: 10px; cursor: pointer;"></i>';
    } else {
      this.element.nativeElement.setAttribute('type', 'password');
      span.innerHTML = '<i class="fa fa-eye" id="togglePassword" style="position:relative; right: 10px; cursor: pointer;"></i>';
    }
  }
   setup() {
    const parent = this.element.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = `<i class="fa fa-eye" id="togglePassword" style="position:relative; right: 10px; cursor: pointer;"></i>`;
    span.addEventListener('click', (event) => {
      this.toggle(span)
    });
    parent.appendChild(span);
  }

}
