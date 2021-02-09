import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUri = 'https://hermesarticles-backend.herokuapp.com/';
  articles: Article[];
  constructor(private _HttpClient:HttpClient) {

  }

  getLastNews(){
   return this._HttpClient.get<Article[]>(`${this.baseUri}api/lastNews`).toPromise();
  }

  getLastNew(){
    return this._HttpClient.get<Article>('http://localhost:3000/api/getLastNew').toPromise();
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
}

