import {ModelModel} from '../shared/model.model';
import {Subject} from 'rxjs/internal/Subject';


export class ModelService {
  modelChanged = new Subject<ModelModel[]>();
  startedEditing = new Subject<number>();
  private models: ModelModel[] = [
    new ModelModel('Golf'),
    new ModelModel('GLA'),
    new ModelModel('Some model')
  ];

  getModels() {
    return this.models.slice();
  }

  getModel(index: number) {
    return this.models[index];
  }

  addModel(model: ModelModel) {
    this.models.push(model);
    this.modelChanged.next(this.models.slice());
  }

  updateModel(index: number, newModel: ModelModel) {
    this.models[index] = newModel;
    this.modelChanged.next(this.models.slice());
  }

  deleteModel(index: number) {
    this.models.splice(index, 1);
    this.modelChanged.next(this.models.slice());
  }
}
