import {BrandModel} from './brand.model';
import {Injectable} from '@angular/core';
import { ModelModel } from '../shared/model.model';
import {Subject} from 'rxjs/internal/Subject';

@Injectable()
export class OptionsService {
  brandsChanged = new Subject<BrandModel[]>();
  // private brands: BrandModel[] = [
  //   new BrandModel('Volkswagen',
  //     'Business organisation VAG',
  //     'https://cdn.freebiesupply.com/logos/large/2x/volkswagen-logo-png-transparent.png',
  //     [
  //       new ModelModel('Polo'),
  //       new ModelModel('Passat')
  //     ]),
  //   new BrandModel('Mercedes-Benz',
  //     'Business organisation Daimler',
  //     'https://upload.wikimedia.org/wikipedia/nah/c/c2/Mercedes-Benz_logo.gif',
  //     [
  //       new ModelModel('A-class'),
  //       new ModelModel('Sprinter')
  //     ])
  // ];
  private brands: BrandModel[] = [];
  constructor() {}

  getBrands() {
    return this.brands.slice();
  }

  getBrand(index: number) {
    return this.brands[index];
  }

  addBrand(brand: BrandModel) {
    this.brands.push(brand);
    this.brandsChanged.next(this.brands.slice());
  }

  updateBrand(index: number, newBrand: BrandModel) {
    this.brands[index] = newBrand;
    this.brandsChanged.next(this.brands.slice());
  }

  delBrand(index: number) {
    this.brands.splice(index, 1);
    this.brandsChanged.next(this.brands.slice());
  }

  setBrands(brands: BrandModel[]) {
    this.brands = brands;
    this.brandsChanged.next(this.brands.slice());
  }


}
