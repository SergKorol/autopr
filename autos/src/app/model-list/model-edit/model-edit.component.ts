import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModelModel} from '../../shared/model.model';
import {ModelService} from '../model.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.css']
})
export class ModelEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') mForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: ModelModel;
  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.subscription = this.modelService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.modelService.getModel(index);
        this.mForm.setValue({
          name: this.editedItem.name
        });
      }
    );
  }
  onSubmit(form: NgForm) {
      const modelName = form.value;
      const newModel = new ModelModel(modelName.name);
      if (this.editMode) {
        this.modelService.updateModel(this.editedItemIndex, newModel);
      } else {
        this.modelService.addModel(newModel);
      }
      this.editMode = false;
      form.reset();

  }

  onDelete() {
    this.modelService.deleteModel(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.mForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
