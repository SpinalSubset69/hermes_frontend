import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedarticle',
  templateUrl: './feedarticle.component.html',
  styleUrls: ['./feedarticle.component.css']
})
export class FeedarticleComponent implements OnInit {
  @Input() Articles:any = {};
  articles:any = {};
  constructor(private _Router: Router) { }

  ngOnInit(): void {
    this.articles = this.Articles;
  }

}
