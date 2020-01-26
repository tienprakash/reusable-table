import { Directive, ElementRef, Renderer, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appStyleCell]'
})
export class StyleCellDirective implements OnChanges {
  @Input() appStyleCell: string;
  constructor(
    private element: ElementRef,
    private renderer: Renderer,
  ) { }

  ngOnChanges() {
    if (this.appStyleCell === undefined) {
      this.renderer.setElementStyle(
        this.element.nativeElement,
        'color',
        '#dcdcdc');
      this.renderer.setElementStyle(
        this.element.nativeElement,
        'text-align',
        'center');
    }
    if (typeof this.appStyleCell === 'number') {
      this.renderer.setElementStyle(
        this.element.nativeElement,
        'text-align',
        'right');
    }
  }
}
