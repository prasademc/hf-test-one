import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";

import { SearchQuery } from '../models/search.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

	private subject = new BehaviorSubject<SearchQuery>({search:'', category: []});
	searchKey$: Observable<SearchQuery> = this.subject.asObservable().pipe(filter((search) => search.search.length > 3 || search.category.length > 0));

  	constructor() { }

	updateBrands(search: SearchQuery): void {
		this.subject.next(search);
	}
}
