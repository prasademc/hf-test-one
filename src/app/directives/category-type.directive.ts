import { Directive, ElementRef, Input, OnInit, Renderer2,  } from '@angular/core';

@Directive({
  selector: '[categoryType]'
})
export class CategoryTypeDirective {

	constructor(private el: ElementRef, private renderer: Renderer2) {
		this.highlight();
	}

	highlight(): void {
		if(this.el.nativeElement.innerHTML.length > 0) {
			let text = this.el.nativeElement.innerHTML;
			if(text.includes("Popular") && text.includes("New")) {
				this.el.nativeElement.innerText = 'New';
				this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '##2AC37A');
			} else if(text.includes("Popular")) {
				this.el.nativeElement.innerText = 'Popular';
				this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#4CA7DA');
			} else if(text.includes("New")) {
				this.el.nativeElement.innerText = 'New';
				this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#2AC37A');
			} else {
				this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
			}
		}
	}

}
