import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input('show') show:boolean;
  
  constructor(private el:ElementRef,private ren:Renderer2) {
   
   }

   
 ngOnInit(){
  
   if(!this.show){
    this.ren.setStyle(this.el.nativeElement, 'display', 'none');
   }
   
 }

}
