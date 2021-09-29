import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './Routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mainRoutes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
