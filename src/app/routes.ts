import {Router, RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { ListarticlesComponent } from './components/listarticles/listarticles.component';

const APP_ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'article/:id', component: ArticleComponent},
  {path: 'listArticles/:category', component: ListarticlesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const ROUTING = RouterModule.forRoot(APP_ROUTES)
