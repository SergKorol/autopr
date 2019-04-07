import {Component, Input, OnInit, Output} from '@angular/core';
import {BrandModel} from '../../options/brand.model';

@Component({
  selector: 'app-matched-item-brand',
  templateUrl: './matched-item-brand.component.html',
  styleUrls: ['./matched-item-brand.component.css']
})
export class MatchedItemBrandComponent implements OnInit {
  @Input() brand: BrandModel;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
