import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { ArticleService, Article} from "../../service/article-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastNew:Article[];
  localArticles:Article[];
  constructor(private _Router: Router,
              private _ArticleService:ArticleService) { }

  ngOnInit(): void {
      this._ArticleService.getLastNew().subscribe((response:any) => {
        this.lastNew = response.lastArticle;
        console.log(this.lastNew);
      });

      this._ArticleService.getArticlesByCategoryLocal('local').subscribe((response:any) => {
        this.localArticles = response.news;
        console.log(this.localArticles);
      })
  }



  goArticle(){
    this._Router.navigate(['article', this.lastNew[0]._id]);
  }

}
