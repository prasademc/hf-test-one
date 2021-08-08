"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrandListComponent = void 0;
var core_1 = require("@angular/core");
var brand_service_1 = require("../../services/brand.service");
var BrandListComponent = /** @class */ (function () {
    function BrandListComponent(brandService, messageService) {
        this.brandService = brandService;
        this.messageService = messageService;
        this.brands = [];
        this.searchBrands = [];
        this.filterBrands = [];
        this.searchCategories = [];
    }
    BrandListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.brandService.getBrands().subscribe(function (brands) {
            if (Array.isArray(brands)) {
                _this.messageService.searchKey$.subscribe(function (searchKey) {
                    var _a, _b;
                    if (searchKey) {
                        _this.brands = brands;
                        if (searchKey.category.length > 0) {
                            searchKey.category.forEach(function (cat) {
                                var _a;
                                if (!_this.searchCategories.some(function (searchCategory) { return searchCategory.toString().toLowerCase().indexOf(cat.toString().toLowerCase()) !== -1; })) {
                                    _this.searchCategories.push(searchKey.category);
                                    var filter = [];
                                    (_a = _this.filterBrands).push.apply(_a, _this.brands.filter(function (brand) { return brand.category.toString().toLowerCase().indexOf(cat.toString().toLowerCase()) !== -1; }));
                                }
                            });
                            _this.searchBrands = _this.filterBrands.filter(function (brand) { return brand.brandName.toString().toLowerCase().indexOf(searchKey.search.toString().toLowerCase()) !== -1; });
                            _this.brands = [];
                            (_a = _this.brands).push.apply(_a, _this.searchBrands);
                        }
                        else {
                            _this.searchBrands = _this.brands.filter(function (brand) { return brand.brandName.toString().toLowerCase().indexOf(searchKey.search.toString().toLowerCase()) !== -1; });
                            _this.brands = [];
                            (_b = _this.brands).push.apply(_b, _this.searchBrands);
                        }
                    }
                });
            }
        });
    };
    BrandListComponent = __decorate([
        core_1.Component({
            selector: 'app-brand-list',
            templateUrl: './brand-list.component.html',
            styleUrls: ['./brand-list.component.scss'],
            providers: [brand_service_1.BrandService]
        })
    ], BrandListComponent);
    return BrandListComponent;
}());
exports.BrandListComponent = BrandListComponent;
