import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { ArticleService} from "../../service/article-service.service";
import { Article } from '../../models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastestArticles:Article;
  localArticles:Article[];
  regionalArticles:Article[];
  nationalArticles:Article[];
  estatalArticles:Article[];
  show:boolean = false;
  regionalShow:boolean= false;
  nacionalShow:boolean= false;
  localShow:boolean= false;
  lastestShow:boolean= false;
  internacionalShow:boolean= false;
  categorys=["regional", "local", "nacional", "estatal"]

  constructor(private _Router: Router,
              private _ArticleService:ArticleService) {}

  ngOnInit(): void {
    this._ArticleService.getArticlesByCategoryLocal('local')
    .then((response:any) => {
      if(response.status === "Exitoso"){
        this.localArticles = response.news;
        this.localShow = true;
      }
    }).catch(err => {
      console.log(err);
    });

    this._ArticleService.getArticlesByCategoryLocal('regional')
    .then((response:any) => {
      if(response.status === "Exitoso"){
        this.regionalArticles = response.news;
        this.regionalShow = true;
      }
    }).catch(err => {
      console.log(err);
    });

    this._ArticleService.getArticlesByCategoryLocal('nacional')
    .then((response:any) => {
      if(response.status === "Exitoso"){
        this.nationalArticles = response.news;
        this.nacionalShow = true;
      }

    }).catch(err => {
      console.log(err);
    });

    this._ArticleService.getArticlesByCategoryLocal('estatal')
    .then((response:any) => {
      if(response.status === "Exitoso"){
        this.estatalArticles = response.news;
        this.internacionalShow = true;
      }

    }).catch(err => {
      console.log(err);
    });

    this._ArticleService.getLastNews()
    .then((response:any) =>{
      if(response.status === "Exitoso"){
        this.lastestArticles = response.news;
        this.lastestShow = true;
      }
    }).catch(err => {
      console.log(err);
    });

    window.onscroll = () => {
      let y = window.scrollY;
      if(y >= 600){
        this.show = true;
      }else{
        this.show = false;
      }
    }
  }

  toUp(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
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
