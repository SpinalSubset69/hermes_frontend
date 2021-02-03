import { ArticleService } from './../../service/article-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent implements OnInit {

  category:string;
  articles:any = {};

  constructor(private _ActivatedRoute: ActivatedRoute,
              private _ArticleService:ArticleService) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params:any) => {
      this.category = params['category'];
    });

    this._ArticleService.getByCategory(this.category).subscribe((response:any) => {
      this.articles = response.news;
      console.log(this.articles);
    });
  }

}
