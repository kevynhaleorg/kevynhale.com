import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MatomoModule } from 'ngx-matomo';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogSingleComponent } from './pages/blog/blog-single/blog-single.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlogEntryComponent } from './pages/blog/blog-entry/blog-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BlogComponent,
    BlogSingleComponent,
    SearchBarComponent,
    BlogEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatomoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
