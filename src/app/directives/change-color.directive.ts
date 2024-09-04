import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {

  constructor(private _element : ElementRef) { 
    this._element.nativeElement.style.color='blue'
  }

  //EVENT LISTENER
  @HostListener('mouseenter') mouseEnter() {
    //this._element.nativeElement.style.color='grey'
    this.changeColor('grey')
  }

  @HostListener('mouseleave') mouseLeave(){
    this.changeColor('blue')
  }

  //LOCAL FUNCTION
  changeColor(myColor: string){
    this._element.nativeElement.style.color=myColor;
  }


}
