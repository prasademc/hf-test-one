import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../../models/brand.interface';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

	@Input()
	brandData: Brand = {
		brandId: 0,
		brandName: '',
		discount: '',
		category: '',
		logoURL: '',
		type: ''
	}

  constructor() { }

  ngOnInit(): void {

  }

}
