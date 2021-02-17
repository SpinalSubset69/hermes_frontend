import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUri = 'https://hermesarticles-backend.herokuapp.com/';

  constructor(private _HttpClient:HttpClient) {}

  getLastNews(){
   return this._HttpClient.get<Article[]>(`${this.baseUri}api/lastNews`).toPromise();
  }

  getArticle(id){
    return this._HttpClient.get<Article>(`${this.baseUri}api/getNew/${id}`).toPromise();
  }

  getImage(imageName){
    return this._HttpClient.get(`${this.baseUri}api/getImage/${imageName}`).toPromise();
  }

  getArticlesByCategoryLocal(category:String){
    return this._HttpClient.get<Article[]>(`${this.baseUri}api/getByCategory/${category}`).toPromise();
  }

  getByCategory(category:String){
    return this._HttpClient.get<Article[]>(`${this.baseUri}api/getCategory/${category}`).toPromise();
  }

  getByTerm(term:string){
    return this._HttpClient.get<Article[]>(`${this.baseUri}api/getByTerm/${term}`).toPromise();
  }
}

