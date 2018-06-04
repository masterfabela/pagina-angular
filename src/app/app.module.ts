import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './lib/components/nav/title.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { OperationsComponent } from './views/operations.component';
import { ScrollComponent } from './components/scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    TitleComponent,
    HomeComponent,
    NotFoundComponent,
    OperationsComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent, HomeComponent, NotFoundComponent]
})
export class AppModule { }
