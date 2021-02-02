import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[];
  constructor(private _HttpClient:HttpClient) {
    console.log('Servicio de articulos listo.')
  }

  getLastNews(){
   return this._HttpClient.get<Article[]>('http://localhost:3000/api/lastNews');
  }

  getLastNew(){
    return this._HttpClient.get<Article>('http://localhost:3000/api/getLastNew');
  }

  getArticle(id){
    return this._HttpClient.get<Article>(`http://localhost:3000/api/getNew/${id}`);
  }

  getImage(imageName){
    return this._HttpClient.get(`http://localhost:3000/api/getImage/${imageName}`)
  }

  getArticlesByCategoryLocal(category:String){
    return this._HttpClient.get<Article[]>(`http://localhost:3000/api/getByCategory/${category}`)
  }

  getByCategory(category:String){
    return this._HttpClient.get<Article[]>(`http://localhost:3000/api/getCategory/${category}`);
  }
}

export interface Article{
  _id: String
  title: String,
  summary: String,
  content: String,
  author: String,
  date?: Date,
  image?: String,
  category?: String
}
