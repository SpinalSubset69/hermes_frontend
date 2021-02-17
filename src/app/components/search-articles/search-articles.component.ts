import { Article } from './../../models/Article';
import { ArticleService } from './../../service/article-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css']
})
export class SearchArticlesComponent implements OnInit {
  founded:boolean;
  articles:Article[];
  term:string;
  constructor(private _ActivatedRoute:ActivatedRoute, private _ArticleService:ArticleService,
              private _Router:Router) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this._ArticleService.getByTerm(this.term)
    .then((response:any) => {
      this.articles = response.filterArticles;
      if(this.articles.length == 0){
        this.founded = false;
      }
      if(this.articles.length > 0){
        this.founded = true;
      }
    })
    .catch(err => {
      console.log(err);
    });
    });

  }

  goHome(){
    this._Router.navigate(['home']);
  }
}
