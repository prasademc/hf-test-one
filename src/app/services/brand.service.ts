import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

import { AllBrands } from '../models/all.brands.interface';
import { Brand } from '../models/brand.interface';
import { Category } from '../models/category.interface';
import { Observable } from 'rxjs/internal/Observable';
import { map, shareReplay } from "rxjs/operators";


@Injectable()
export class BrandService {
	brandEndpoint: string = '';
	categories: Category[] = [];

	constructor(private httpClient: HttpClient) {
		this.brandEndpoint = environment.apiEndpoint;
	}

	getBrands(): Observable<Brand[]> {
		return this.httpClient.get<AllBrands>(this.brandEndpoint).pipe(
			map((res) => {
				res.brands.every(brand => {
					if(brand.category.includes("Popular") && brand.category.includes("New")) {
						brand.type = 'New'
					} else if(brand.category.includes("Popular")) {
						brand.type = 'Popular'
					} else if(brand.category.includes("New")) {
						brand.type = 'New'
					} else {
						brand.type = ''
					}
					return brand;
				});
				return res.brands;
			}),
			shareReplay()
		);
	}

	getCategories(): Observable<Category[]> {
		return this.httpClient.get<AllBrands>(this.brandEndpoint).pipe(
			map((res) => {
				res.brands.forEach((brand, index) => {
					let cat = {
						category: brand.category
					}

					if(!this.categories.some(category => category?.category.toString().normalize() === brand?.category.toString().normalize())) {
						this.categories.push(cat);
					}
				});

				return this.categories;
			}),
			shareReplay()
		);
	}
}
