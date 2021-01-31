import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
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
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _ArticleService: ArticleService) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this._ArticleService.getArticle(this.id).subscribe((response:any)=> {
      this.article = response.article;
      /* console.log(this.article) */
      this.content = this.article.content.split('\n\n');
      console.log(this.content);
    });
  }

  writeContent(){
    let container = document.getElementById('info');
    for(let item in this.content){
      let br = document.createElement("br");
      let paragraph = document.createElement("p");
      paragraph.innerHTML = this.content[item];
      container.appendChild(paragraph);
      container.appendChild(br);
    }
  }

  getImage(){
    return `http://localhost:3000/api/getImage/${this.article.image}`;
  }

}
