import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OptionsService} from '../options/options.service';
import {BrandModel} from '../options/brand.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private brandService: OptionsService,
              private authService: AuthService) {}

  storeBrands() {
    // const token = this.enterService.getToken();
    const token = this.authService.getToken();
    return this.http.put('https://autopr-7c31f.firebaseio.com/brands.json?auth=' + token, this.brandService.getBrands());
  }
  // Если входящие данные дать по интерфейсу, то будет ошибка, но работать будет
  // поэтому лучше поставить произвольный тип данных, так не ругается и тоже все работает.
  getBrands() {
    // const token = this.enterService.getToken();
    const token = this.authService.getToken();
    this.http.get('https://autopr-7c31f.firebaseio.com/brands.json?auth=' + token).pipe(map(
      (response: Response) => {
        console.log(response);
        const brands: any = response;
        for (const brand of brands) {
          if (!brand['models']) {
            brand['models'] = [];
          }
        }
        return brands;
      }
    )).subscribe(
      (brands: BrandModel[]) => {
        this.brandService.setBrands(brands);
      }
    );
  }

  // Этот способ работает без ошибок
  // getBrands() {
  //   this.http.get('https://autopr-7c31f.firebaseio.com/brands.json')
  //     .subscribe(
  //       (brands: BrandModel[]) => {
  //         this.brandService.setBrands(brands);
  //       }
  //     );
  // }



}
