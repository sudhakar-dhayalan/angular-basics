import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangingColorDirective]'
})
export class ChangingColorDirectiveDirective {

  @Input() bgColor: string;
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.el.nativeElement.style.background = this.bgColor;
  }

}
