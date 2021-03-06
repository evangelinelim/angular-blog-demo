import { NgModule } from '@angular/core';
import { BlogEntryContentComponent } from './blog/blog-entry/blog-entry-content/blog-entry-content.component';
import { BlogEntryHeaderComponent } from './blog/blog-entry/blog-entry-header/blog-entry-header.component';
import { BlogEntryImageComponent } from './blog/blog-entry/blog-entry-image/blog-entry-image.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { BlogComponent } from './blog/blog.component';
import { blogsRoutes } from '../routing/blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryBadgesComponent } from '../site-utilities/category-badges/category-badges.component';
import { AboutSnippetComponent } from '../site-utilities/about-snippet/about-snippet.component';
import { BlogHeaderComponent } from './blog/blog-header/blog-header.component';
import { BlogEntriesComponent } from './blog/blog-entries/blog-entries.component';


@NgModule({
  declarations: [
    BlogEntryComponent,
    BlogEntryImageComponent,
    BlogEntryHeaderComponent,
    BlogEntryContentComponent,
    BlogComponent,
    BlogsComponent,
    CategoryBadgesComponent,
    AboutSnippetComponent,
    BlogHeaderComponent,
    BlogEntriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(blogsRoutes)
  ],
  providers: [],
  bootstrap: [BlogsComponent]
})
export class BlogsModule { }
