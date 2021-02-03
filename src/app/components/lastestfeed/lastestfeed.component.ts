import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lastestfeed',
  templateUrl: './lastestfeed.component.html',
  styleUrls: ['./lastestfeed.component.css']
})
export class LastestfeedComponent implements OnInit {
  @Input() lastestArticles:any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
