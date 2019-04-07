import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { BrandListComponent } from './options/brand-list/brand-list.component';
import { BrandDetailComponent } from './options/brand-detail/brand-detail.component';
import { BrandItemComponent } from './options/brand-item/brand-item.component';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelEditComponent } from './model-list/model-edit/model-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModelService} from './model-list/model.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { OptionsStartComponent } from './options/options-start/options-start.component';
import { BrandEditComponent } from './options/brand-edit/brand-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OptionsService} from './options/options.service';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './shared/data-storage.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthService} from './auth/auth.service';
import {EnterService} from './header/enter.service';
import {EnterGuard} from './header/enter.guard';
import {AuthGuard} from './auth/auth-guard.service';
import { NewArticleComponent } from './new-article/new-article.component';
import {MatchService} from './new-article/match.service';

import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import * as fb from 'firebase';
import { MatchedItemBrandComponent } from './new-article/matched-item-brand/matched-item-brand.component';
import { MatchedBrandListComponent } from './new-article/matched-brand-list/matched-brand-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionsComponent,
    BrandListComponent,
    BrandDetailComponent,
    BrandItemComponent,
    ModelListComponent,
    ModelEditComponent,
    OptionsStartComponent,
    BrandEditComponent,
    SigninComponent,
    SignupComponent,
    NewArticleComponent,
    MatchedItemBrandComponent,
    MatchedBrandListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule
  ],
  providers: [ModelService,
              OptionsService,
              DataStorageService,
              AuthService,
              EnterService,
              EnterGuard,
              AuthGuard,
              MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
