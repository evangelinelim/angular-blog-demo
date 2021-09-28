import { NgModule } from '@angular/core';
import { BlogEntryContentComponent } from './blog/blog-entry/blog-entry-content/blog-entry-content.component';
import { BlogEntryHeaderComponent } from './blog/blog-entry/blog-entry-header/blog-entry-header.component';
import { BlogEntryImageComponent } from './blog/blog-entry/blog-entry-image/blog-entry-image.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { BlogComponent } from './blog/blog.component';
import { blogsRoutes } from '../Routing/blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BlogEntryComponent,
    BlogEntryImageComponent,
    BlogEntryHeaderComponent,
    BlogEntryContentComponent,
    BlogComponent,
    BlogsComponent    
  ],
  imports: [
    RouterModule.forChild(blogsRoutes),
    CommonModule
  ],
  providers: [],
  bootstrap: [BlogsComponent]
})
export class BlogsModule { }
