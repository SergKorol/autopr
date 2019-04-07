import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {OptionsService} from '../options.service';
import { BrandModel } from '../brand.model';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  id: number;
  editMode = false;
  brandForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private brandService: OptionsService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newBrand = new BrandModel(this.brandForm.value['name'],
                                    this.brandForm.value['description'],
                                    this.brandForm.value['imagePath'],
                                    this.brandForm.value['models']);
    if (this.editMode) {
      this.brandService.updateBrand(this.id, newBrand);
    } else {
      this.brandService.addBrand(newBrand);
    }
    this.onCancel();
  }

  private initForm() {
    let brandName = '';
    let brandLogo = '';
    let brandDesc = '';
    const brandModels = new FormArray([]);
    if (this.editMode) {
      const brand = this.brandService.getBrand(this.id);
      brandName = brand.name;
      brandLogo = brand.logoPath;
      brandDesc = brand.description;
      if (brand['models']) {
        for (const model of brand.models) {
            brandModels.push(
              new FormGroup({
                'name': new FormControl(model.name, Validators.required)
              })
            );
        }
      }
    }
    this.brandForm = new FormGroup({
      'name': new FormControl(brandName, Validators.required),
      'imagePath': new FormControl(brandLogo, Validators.required),
      'description': new FormControl(brandDesc, Validators.required),
      'models': brandModels
    });
  }

  onAddModel() {
    (<FormArray>this.brandForm.get('models')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelModel(index: number) {
    (<FormArray>this.brandForm.get('models')).removeAt(index);
  }

}
