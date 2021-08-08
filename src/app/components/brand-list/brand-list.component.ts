import { Component, OnInit } from '@angular/core';

import { Brand } from '../../models/brand.interface';

import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  providers: [BrandService],
})
export class BrandListComponent implements OnInit {

	brands: Brand[] = [];

  	constructor(private brandService:BrandService) { }

	ngOnInit(): void {
		this.brandService.getBrands().subscribe(data => {
			this.brands = data;
		});
	}
}
