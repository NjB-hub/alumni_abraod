import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusMe]'
})
export class FocusMeDirective implements OnInit{

  constructor(private elRef:ElementRef) { }

  ngOnInit():void{
    this.elRef.nativeElement.focus();
  }
}
