import {ModelModel} from '../shared/model.model';

export class BrandModel {
  public name: string;
  public description: string;
  public logoPath: string;
  public models: ModelModel[];

  constructor(name: string, desc: string, logo: string, models: ModelModel[] ) {
    this.name = name;
    this.description = desc;
    this.logoPath = logo;
    this.models = models;
  }
}
