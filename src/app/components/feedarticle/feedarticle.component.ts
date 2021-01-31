import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedarticle',
  templateUrl: './feedarticle.component.html',
  styleUrls: ['./feedarticle.component.css']
})
export class FeedarticleComponent implements OnInit {
  @Input() article:any = {};
  @Input() id:any;
  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }

  goToArticle(){
      this._Router.navigate(['article', this.id]);
  }

  getImage(){
    return `http://localhost:3000/api/getImage/${this.article.image}`;
  }

}
