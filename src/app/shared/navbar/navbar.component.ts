import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  term:string;

  constructor(private _Router: Router) { }

  ngOnInit(): void {

  }

  goHome(){
    this._Router.navigate(['home']);
  }

  goToTerm(){

    this.term = (<HTMLInputElement> document.getElementById('search')).value;
    this._Router.navigate(['search', this.term.toLowerCase()]);
  }
}
