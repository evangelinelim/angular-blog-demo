import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { BlogEntryImageComponent } from './blog-entry/blog-entry-image/blog-entry-image.component';
import { BlogEntryHeaderComponent } from './blog-entry/blog-entry-header/blog-entry-header.component';
import { BlogEntryContentComponent } from './blog-entry/blog-entry-content/blog-entry-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    BlogEntryComponent,
    SiteFooterComponent,
    BlogEntryImageComponent,
    BlogEntryHeaderComponent,
    BlogEntryContentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
