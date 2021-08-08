"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryTypeDirective = void 0;
var core_1 = require("@angular/core");
var CategoryTypeDirective = /** @class */ (function () {
    function CategoryTypeDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.highlight();
    }
    CategoryTypeDirective.prototype.highlight = function () {
        if (this.el.nativeElement.innerHTML.length > 0) {
            var text = this.el.nativeElement.innerHTML;
            if (text.includes("Popular") && text.includes("New")) {
                this.el.nativeElement.innerText = 'New';
                this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '##2AC37A');
            }
            else if (text.includes("Popular")) {
                this.el.nativeElement.innerText = 'Popular';
                this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#4CA7DA');
            }
            else if (text.includes("New")) {
                this.el.nativeElement.innerText = 'New';
                this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#2AC37A');
            }
            else {
                this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
            }
        }
    };
    CategoryTypeDirective = __decorate([
        core_1.Directive({
            selector: '[categoryType]'
        })
    ], CategoryTypeDirective);
    return CategoryTypeDirective;
}());
exports.CategoryTypeDirective = CategoryTypeDirective;
