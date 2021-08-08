"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var i18n_1 = require("ng-zorro-antd/i18n");
var i18n_2 = require("ng-zorro-antd/i18n");
var common_1 = require("@angular/common");
var en_1 = require("@angular/common/locales/en");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var layout_1 = require("ng-zorro-antd/layout");
var card_1 = require("ng-zorro-antd/card");
var badge_1 = require("ng-zorro-antd/badge");
var input_1 = require("ng-zorro-antd/input");
var select_1 = require("ng-zorro-antd/select");
var brand_list_component_1 = require("./components/brand-list/brand-list.component");
var brand_component_1 = require("./components/brand/brand.component");
var search_component_1 = require("./components/search/search.component");
var badge_color_pipe_1 = require("./pipess/badge-color.pipe");
var message_service_1 = require("./services/message.service");
common_1.registerLocaleData(en_1["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                brand_list_component_1.BrandListComponent,
                brand_component_1.BrandComponent,
                search_component_1.SearchComponent,
                badge_color_pipe_1.BadgeColorPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                layout_1.NzLayoutModule,
                card_1.NzCardModule,
                badge_1.NzBadgeModule,
                input_1.NzInputModule,
                select_1.NzSelectModule,
                forms_2.ReactiveFormsModule
            ],
            providers: [{ provide: i18n_1.NZ_I18N, useValue: i18n_2.en_US }, message_service_1.MessageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
