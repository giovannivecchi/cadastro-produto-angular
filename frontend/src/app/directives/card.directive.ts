import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'white'
  }

}
