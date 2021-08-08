import { Pipe, PipeTransform } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Pipe({
  name: 'badgeColor',
  pure: true
})
export class BadgeColorPipe implements PipeTransform {

	constructor(private renderer: Renderer2) {}

	transform(key: string, element?: any): void {
		if(element) {
			if(key === "New") {
				this.renderer.setProperty(element, 'innerHTML', 'New');
				this.renderer.setStyle(element, 'backgroundColor', '#2AC37A');
			} else if(key === "Popular") {
				this.renderer.setProperty(element, 'innerHTML', 'Popular');
				this.renderer.setStyle(element, 'backgroundColor', '#4CA7DA');
			} else {
				this.renderer.setProperty(element, 'innerHTML', '');
				this.renderer.setStyle(element, 'display', 'none');
			}
		}
	}
}
