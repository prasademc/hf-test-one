import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandComponent } from './components/brand/brand.component';
import { SearchComponent } from './components/search/search.component';

import { CategoryTypeDirective } from './directives/category-type.directive';
import { BadgeColorPipe } from './pipess/badge-color.pipe';

import { MessageService } from './services/message.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandComponent,
    SearchComponent,
    CategoryTypeDirective,
    BadgeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
	NzLayoutModule,
    NzCardModule,
	NzBadgeModule,
	NzInputModule,
	NzSelectModule,
	ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US}, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
