import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {


  constructor(private el:ElementRef) { }

  @HostListener('dblclick') ondblclick(){
    const size = parseInt(this.el.nativeElement.style.fontSize.split('px')[0])
    this.el.nativeElement.style.fontSize = size + 2 + 'px';

  }
}
