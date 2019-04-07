import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatchService} from './match.service';
import {OptionsService} from '../options/options.service';
import {MatchedBrandListComponent} from './matched-brand-list/matched-brand-list.component';
import {DataStorageService} from '../shared/data-storage.service';



@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  @ViewChild(MatchedBrandListComponent) private arr: MatchedBrandListComponent;
  pattern = [];
  res = [];
  @ViewChild('l') list: Element;
  constructor(private brandService: OptionsService,
              private match: MatchService,
              private storage: DataStorageService) {}

  ngOnInit() {
    this.pattern = this.arr.sendArr();
    this.storage.getBrands();
  }

  onAnalyse(form: NgForm) {
    this.res = this.match.matchedData;
    console.log(this.pattern);
    const article = form.value.article;
    console.log(article);
    console.log(this.pattern);
    this.match.matchArticle(article, this.pattern);
    form.reset();
    this.match.matchedData = [];
  }

onClear() {
this.res = [];
this.match.matchedData = [];
}


}
