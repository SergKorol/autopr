import { Injectable } from '@angular/core';

import {DataStorageService} from '../shared/data-storage.service';

import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {BrandModel} from '../options/brand.model';
import {OptionsService} from '../options/options.service';
import {AuthService} from '../auth/auth.service';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

export interface Config {
  brand: string;
  model: string;
}

@Injectable()
export class MatchService {
  name = [];
  matchedData = [];
  constructor() {}

  matchArticle(article: string, mask: any) {
      for (const item of mask) {
        console.log(item);
        const regexp = '(\\b[^\\S]|^)' + item + '(\\b|$)';
        console.log(regexp);
        const pattern = new RegExp(regexp, 'img');
        const res = article.match(pattern);
        if (res !== null) {
          console.log(res);
          const unique = this.uniq(res);
          console.log(unique);
          this.matchedData.push(unique);
        }
      }
  }

  uniq(arr: any[]) {
    return arr.reduce((acc, current) => {
      current = current.trim();
      if (!acc.includes(current)) {
        acc.push(current);
      }
      return acc;
    }, []);
  }
}
