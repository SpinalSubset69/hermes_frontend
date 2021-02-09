import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../service/article-service.service';
import { Article } from '../../models/Article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id:string;
  article:Article;
  content:string[];
  relatedArticles: Article[];

  constructor(private _ActivatedRoute: ActivatedRoute,
              private _ArticleService: ArticleService,
              private _Router:Router) {

              }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this._ArticleService.getArticle(this.id)
    .then((response:any) => {
      this.article = response.article;
      /* console.log(this.article) */
      this.content = this.article.content.split('\n');

      this.writeContent(this.content);
      this.relatedNews(this.article.category);
    });
  }

  relatedNews(category:any){
    this._ArticleService.getByCategory(category)
    .then((response:any) => {
      let aux: any = [];
      if(response.status === "Exitoso"){
        for(let i = 0; i < response.news.length; i++){
          if(response.news[i].title !== this.article.title){
             aux.push(response.news[i]);
          }
        }

      }
      this.relatedArticles = aux;

    });
  }


  writeContent(content){
    let container = document.getElementById('info');
    for(let item in content){
      let paragraph = document.createElement("p");
      paragraph.innerHTML = this.content[item];
      container.appendChild(paragraph);

    }
  }

   getImage(){
    return `https://hermesarticles-backend.herokuapp.com/api/getImage/${this.article.image}`
  }

  reloadePage(){
    this.ngOnInit();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
  });
}

  goHome(){
    this._Router.navigate(['home']);
  }

}
