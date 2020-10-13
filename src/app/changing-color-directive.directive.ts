import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangingColorDirective]'
})
export class ChangingColorDirectiveDirective {

  @Input() bgColor: string;
  @HostListener('mouseenter') onMouseEnter(): void {
    this.el.nativeElement.style.background = this.bgColor;
  }
  @HostListener('mouseleave') anyNameYouCanGiveHere(): void {
    this.el.nativeElement.style.background = null;
  }
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {}

}
