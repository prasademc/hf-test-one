"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var brand_service_1 = require("../../services/brand.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(brandService, fb, messageService) {
        this.brandService = brandService;
        this.fb = fb;
        this.messageService = messageService;
        this.categories = [];
        this.listOfSelectedValue = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brandService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
        this.searchForm = this.fb.group({
            search: ['', forms_1.Validators.required],
            category: [[], forms_1.Validators.required]
        });
        this.searchForm.valueChanges.subscribe(function () {
            _this.messageService.updateBrands(_this.searchForm.value);
        });
    };
    SearchComponent.prototype.resetForm = function () {
        this.searchForm.reset();
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.scss'],
            providers: [brand_service_1.BrandService]
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
