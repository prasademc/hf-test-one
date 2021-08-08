"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BadgeColorPipe = void 0;
var core_1 = require("@angular/core");
var BadgeColorPipe = /** @class */ (function () {
    function BadgeColorPipe(renderer) {
        this.renderer = renderer;
    }
    BadgeColorPipe.prototype.transform = function (key, element) {
        if (element) {
            if (key === "New") {
                this.renderer.setProperty(element, 'innerHTML', 'New');
                this.renderer.setStyle(element, 'backgroundColor', '#2AC37A');
            }
            else if (key === "Popular") {
                this.renderer.setProperty(element, 'innerHTML', 'Popular');
                this.renderer.setStyle(element, 'backgroundColor', '#4CA7DA');
            }
            else {
                this.renderer.setProperty(element, 'innerHTML', '');
                this.renderer.setStyle(element, 'display', 'none');
            }
        }
    };
    BadgeColorPipe = __decorate([
        core_1.Pipe({
            name: 'badgeColor',
            pure: true
        })
    ], BadgeColorPipe);
    return BadgeColorPipe;
}());
exports.BadgeColorPipe = BadgeColorPipe;
