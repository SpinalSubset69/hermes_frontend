import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../service/article-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id:string;
  article:any = {};
  content:string[];
  relatedArticles: any = {};

  constructor(private _ActivatedRoute: ActivatedRoute,
              private _ArticleService: ArticleService,
              private _Router:Router) {
                this._ActivatedRoute.params.subscribe(params => {
                  this.id = params['id'];
                });

                this._ArticleService.getArticle(this.id).subscribe((response:any)=> {
                  this.article = response.article;
                  /* console.log(this.article) */
                  this.content = this.article.content.split('\n');
                  console.log(this.content);
                  this.writeContent(this.content);
                  this.relatedNews(this.article.category);
                });
              }

  ngOnInit(): void {

  }

  relatedNews(category:any){
    this._ArticleService.getByCategory(category).subscribe((response:any) => {
      let aux: any = [];
      if(response.status === "Exitoso"){
        for(let i = 0; i < response.news.length; i++){
          if(response.news[i].title !== this.article.title){
             aux.push(response.news[i]);
          }
        }

      }
      this.relatedArticles = aux;
      console.log(this.relatedArticles);
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

  getImage(){
    return `http://localhost:3000/api/getImage/${this.article.image}`;
  }

}
