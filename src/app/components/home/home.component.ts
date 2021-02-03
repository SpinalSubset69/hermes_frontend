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
  lastNewRegional:Article[];
  lastNewNational:Article[];
  lastestArticles:Article[];
  localArticles:Article[];
  regionalArticles:Article[];
  nationalArticles:Article[];
  internationalArticles:Article[];
  constructor(private _Router: Router,
              private _ArticleService:ArticleService) { }

  ngOnInit(): void {

      this._ArticleService.getArticlesByCategoryLocal('local').subscribe((response:any) => {
        this.localArticles = response.news;
        console.log(this.localArticles);
      });

      this._ArticleService.getArticlesByCategoryLocal('regional').subscribe((response:any) => {
        this.regionalArticles = response.news;
        this.lastNewRegional = this.regionalArticles;
        console.log(this.localArticles);
      });

      this._ArticleService.getArticlesByCategoryLocal('nacional').subscribe((response:any) => {
        this.nationalArticles = response.news;
        this.lastNewNational = this.nationalArticles;
        console.log(this.localArticles);
      });

      this._ArticleService.getArticlesByCategoryLocal('internacional').subscribe((response:any) => {
        this.internationalArticles = response.news;
        console.log(this.localArticles);
      });

      this._ArticleService.getLastNews().subscribe((response:any) => {
        this.lastestArticles = response.news;
        console.log(this.lastestArticles);
      })

  }

  goToLocal(){
     this._Router.navigate(['listArticles', 'local']);
  }

  goToRegional(){
    this._Router.navigate(['listArticles', 'regional']);
  }

  goToEstatal(){
    this._Router.navigate(['listArticles', 'estatal']);
  }

  goToNacional(){
    this._Router.navigate(['listArticles', 'nacional']);
  }

  goToInternacional(){
    this._Router.navigate(['listArticles', 'internacional']);
  }

}
