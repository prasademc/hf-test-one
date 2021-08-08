"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrandService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var operators_1 = require("rxjs/operators");
var BrandService = /** @class */ (function () {
    function BrandService(httpClient) {
        this.httpClient = httpClient;
        this.brandEndpoint = '';
        this.categories = [];
        this.brandEndpoint = environment_1.environment.apiEndpoint;
    }
    BrandService.prototype.getBrands = function () {
        return this.httpClient.get(this.brandEndpoint).pipe(operators_1.map(function (res) {
            res.brands.every(function (brand) {
                if (brand.category.includes("Popular") && brand.category.includes("New")) {
                    brand.type = 'New';
                }
                else if (brand.category.includes("Popular")) {
                    brand.type = 'Popular';
                }
                else if (brand.category.includes("New")) {
                    brand.type = 'New';
                }
                else {
                    brand.type = '';
                }
                return brand;
            });
            return res.brands;
        }), operators_1.shareReplay());
    };
    BrandService.prototype.getCategories = function () {
        var _this = this;
        return this.httpClient.get(this.brandEndpoint).pipe(operators_1.map(function (res) {
            res.brands.forEach(function (brand, index) {
                var cat = {
                    category: brand.category
                };
                if (!_this.categories.some(function (category) { return (category === null || category === void 0 ? void 0 : category.category.toString().normalize()) === (brand === null || brand === void 0 ? void 0 : brand.category.toString().normalize()); })) {
                    _this.categories.push(cat);
                }
            });
            return _this.categories;
        }), operators_1.shareReplay());
    };
    BrandService = __decorate([
        core_1.Injectable()
    ], BrandService);
    return BrandService;
}());
exports.BrandService = BrandService;
