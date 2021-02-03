import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from '../app/routes'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainarticleComponent } from './components/mainarticle/mainarticle.component';
import { HomeComponent } from './components/home/home.component';
import { FeedarticleComponent } from './components/feedarticle/feedarticle.component';
import { ArticleComponent } from './components/article/article.component';
import { FeedComponent } from './components/feed/feed.component';
import { ListarticlesComponent } from './components/listarticles/listarticles.component';
import { LastestfeedComponent } from './components/lastestfeed/lastestfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    MainarticleComponent,
    HomeComponent,
    FeedarticleComponent,
    ArticleComponent,
    FeedComponent,
    ListarticlesComponent,
    LastestfeedComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
