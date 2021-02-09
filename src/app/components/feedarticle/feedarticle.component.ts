import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-feedarticle',
  templateUrl: './feedarticle.component.html',
  styleUrls: ['./feedarticle.component.css']
})
export class FeedarticleComponent implements OnInit {
  @Input() Articles:Article[];
  @Input() Category:String;

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
}
