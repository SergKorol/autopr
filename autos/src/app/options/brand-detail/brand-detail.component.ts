import {Component, OnInit} from '@angular/core';
import {BrandModel} from '../brand.model';
import {OptionsService} from '../options.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {
  brand: BrandModel;
  id: number;
  constructor(private optionsService: OptionsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          this.id = +params['id'];
          this.brand = this.optionsService.getBrand(this.id);
      }
    );
  }
  onEditBrand() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['/', this.id, 'edit'], {relativeTo: this.route});
  }

  onDelBrand() {
    this.optionsService.delBrand(this.id);
    this.router.navigate(['/options']);
  }
}
