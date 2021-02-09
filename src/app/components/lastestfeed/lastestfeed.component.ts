import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-lastestfeed',
  templateUrl: './lastestfeed.component.html',
  styleUrls: ['./lastestfeed.component.css']
})
export class LastestfeedComponent implements OnInit {
  @Input() lastestArticles:Article[];
  constructor() { }

  ngOnInit(): void {
  }

}
