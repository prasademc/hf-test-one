import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControlName,
	FormGroup,
	Validators,
  } from '@angular/forms';

import { BrandService } from '../../services/brand.service';
import { MessageService } from '../../services/message.service';

import { Category } from '../../models/category.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [BrandService]
})
export class SearchComponent implements OnInit {
	categories: Category[] = [];
	listOfSelectedValue: Category[] = [];
	searchForm!: FormGroup;

  	constructor(private brandService:BrandService, private fb:FormBuilder, private messageService:MessageService) { }

	ngOnInit(): void {
		this.brandService.getCategories().subscribe(data => {
			this.categories = data;
		});

		this.searchForm = this.fb.group({
			search: ['', Validators.required],
			category: [[], Validators.required]
		});

		this.searchForm.valueChanges.subscribe(
			() => {
				this.messageService.updateBrands(this.searchForm.value)
			}
		  )
	}

	resetForm():void {
		this.searchForm.reset();
	}
}
