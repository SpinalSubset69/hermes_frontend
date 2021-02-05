import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() id:string;
  @Input() article:Article;
  constructor(private _Router:Router) {
   }

  ngOnInit(): void {
  }

  getImage(){
    return `https://hermesarticles-backend.herokuapp.com/api/getImage/${this.article.image}`;
  }

  goToArticle(){
    this._Router.navigate(['article', this.id]);
  }

}
