import {Router, RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';


const APP_ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'article/:id', component: ArticleComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const ROUTING = RouterModule.forRoot(APP_ROUTES)
