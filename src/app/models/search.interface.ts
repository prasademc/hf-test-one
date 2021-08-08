import { Category } from "./category.interface";

export interface SearchQuery {
	search: string;
	category: Array<string>;
}
