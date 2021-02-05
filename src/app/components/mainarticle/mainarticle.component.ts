import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';
@Component({
  selector: 'app-mainarticle',
  templateUrl: './mainarticle.component.html',
  styleUrls: ['./mainarticle.component.css']
})
export class MainarticleComponent implements OnInit {
  @Input() article:Article;

  constructor() { }

  ngOnInit(): void {
  }
  getImage(){
    return `https://hermesarticles-backend.herokuapp.com/api/getImage/${this.article[0].image}`;
  }
}
