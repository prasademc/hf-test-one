import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Brand } from '../../models/brand.interface';

import { BrandService } from '../../services/brand.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  providers: [BrandService],
})
export class BrandListComponent implements OnInit {

	brands: Brand[] = [];
	searchBrands: Brand[] = [];
	filterBrands: Brand[] = [];
	searchCategories: Array<string[]> = [];

  	constructor(private brandService:BrandService, private messageService:MessageService) { }

	ngOnInit(): void {
		this.brandService.getBrands().subscribe(brands => {
			if(Array.isArray(brands)) {
				this.messageService.searchKey$.subscribe(searchKey => {
					if(searchKey) {
						this.brands = brands;
						if(searchKey.category.length > 0) {
							searchKey.category.forEach(cat => {
								if(!this.searchCategories.some(searchCategory => searchCategory.toString().toLowerCase().indexOf(cat.toString().toLowerCase()) !== -1)){
									this.searchCategories.push(searchKey.category);
									let filter = [];
									this.filterBrands.push(...this.brands.filter(brand => brand.category.toString().toLowerCase().indexOf(cat.toString().toLowerCase()) !== -1));
								}
							});
							this.searchBrands = this.filterBrands.filter((brand) => brand.brandName.toString().toLowerCase().indexOf(searchKey.search.toString().toLowerCase()) !== -1);
							this.brands = [];
							this.brands.push(...this.searchBrands);
						} else {
							this.searchBrands = this.brands.filter((brand) => brand.brandName.toString().toLowerCase().indexOf(searchKey.search.toString().toLowerCase()) !== -1);
							this.brands = [];
							this.brands.push(...this.searchBrands);
						}
					}
				});
			}
		});
	}
}
