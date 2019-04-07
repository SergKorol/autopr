import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BrandModel} from '../../options/brand.model';
import {Subscription} from 'rxjs/Subscription';
import {OptionsService} from '../../options/options.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../match.service';
import {NgModel} from '@angular/forms';



@Component({
  selector: 'app-matched-brand-list',
  templateUrl: './matched-brand-list.component.html',
  styleUrls: ['./matched-brand-list.component.css']
})

export class MatchedBrandListComponent implements OnInit, OnDestroy {
  @Input() test = 'fuck';
  brands: BrandModel[];
  @Input() brandsArray = [];
  subscription: Subscription;
  constructor(private brandService: OptionsService,
              private router: Router,
              private route: ActivatedRoute,
              private match: MatchService) { }

  ngOnInit() {
    // this.subscription = this.match.brandsChangedItems.subscribe(
    //   (item: BrandModel[]) => {
    //     this.brands = item;
    //   }
    // );
    // this.brands = this.match.getItemBrands();
    this.subscription = this.brandService.brandsChanged.subscribe(
      (brands: BrandModel[]) => {
        this.brands = brands;
        for (const brand of this.brands) {
          this.brandsArray.push(brand.name);
        }
        console.log(this.brandsArray);
      }
    );
    this.brands = this.brandService.getBrands();
  }

  sendArr() {
    return this.brandsArray;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
