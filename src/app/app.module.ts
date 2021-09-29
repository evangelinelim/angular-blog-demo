import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutes } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './site-utilities/utility.httpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule
],
providers: [{provide: HTTP_INTERCEPTORS, useClass: MyInterceptor , 
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
