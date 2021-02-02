import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() id:string;
  @Input() article:any = {};
  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }

  getImage(){
    return `http://localhost:3000/api/getImage/${this.article.image}`;
  }

  goToArticle(){
    this._Router.navigate(['article', this.id]);
  }

}
