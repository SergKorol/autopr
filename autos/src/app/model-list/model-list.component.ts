import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModelModel} from '../shared/model.model';
import {ModelService} from './model.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit, OnDestroy {
  models: ModelModel[];
  private subscription: Subscription;

  constructor(private modelService: ModelService) { }

  ngOnInit() {
      this.models = this.modelService.getModels();
      this.subscription = this.modelService.modelChanged.subscribe(
      (models: ModelModel[]) => {
        this.models = models;
      }
    );
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
  onEditItem(index: number) {
    this.modelService.startedEditing.next(index);
  }
}
