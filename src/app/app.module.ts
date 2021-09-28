import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutes } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SiteFooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
