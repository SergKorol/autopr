import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BrandModel} from '../brand.model';
import {OptionsService} from '../options.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit, OnDestroy {
  brands: BrandModel[];
  subscription: Subscription;
  constructor(private brandService: OptionsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.brandService.brandsChanged.subscribe(
    (brands: BrandModel[]) => {
      this.brands = brands;
    }
    );
    this.brands = this.brandService.getBrands();
  }

  onNewBrand() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
