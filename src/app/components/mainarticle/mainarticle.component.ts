import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../service/article-service.service';

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
    return `http://localhost:3000/api/getImage/${this.article[0].image}`;
  }
}
