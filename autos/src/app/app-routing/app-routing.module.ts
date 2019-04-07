import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OptionsComponent} from '../options/options.component';
import {ModelListComponent} from '../model-list/model-list.component';
import {OptionsStartComponent} from '../options/options-start/options-start.component';
import {BrandDetailComponent} from '../options/brand-detail/brand-detail.component';
import {BrandEditComponent} from '../options/brand-edit/brand-edit.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {EnterGuard} from '../header/enter.guard';
import {SigninComponent} from '../auth/signin/signin.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {NewArticleComponent} from '../new-article/new-article.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/options', pathMatch: 'full' },
  { path: 'options', component: OptionsComponent, children: [
      {path: '', component: OptionsStartComponent},
      {path: 'new', component: BrandEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: BrandDetailComponent},
      {path: ':id/edit', component: BrandEditComponent, canActivate: [AuthGuard]}
    ]},
  { path: 'models', component: ModelListComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'new-article', component: NewArticleComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
