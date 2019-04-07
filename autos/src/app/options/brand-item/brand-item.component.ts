import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BrandModel} from '../brand.model';
import {OptionsService} from '../options.service';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
  styleUrls: ['./brand-item.component.css']
})
export class BrandItemComponent implements OnInit {
  @Input() brand: BrandModel;
  @Input() index: number;

  ngOnInit() {
  }
}
