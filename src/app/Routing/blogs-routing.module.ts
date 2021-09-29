import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogEntryComponent } from '../blogs/blog/blog-entry/blog-entry.component';
import { BlogComponent } from '../blogs/blog/blog.component';
import { NewEntryComponent } from '../blogs/blog/new-entry/new-entry.component';
import { BlogsComponent } from '../blogs/blogs.component';

export const blogsRoutes = [
  { path: 'new-entry', component: NewEntryComponent },
  { path: 'blog-entry', component: BlogEntryComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', component: BlogsComponent }
];

