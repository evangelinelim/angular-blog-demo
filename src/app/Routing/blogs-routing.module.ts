import { BlogEntryComponent } from '../blogs/blog/blog-entry/blog-entry.component';
import { BlogComponent } from '../blogs/blog/blog.component';
import { BlogsComponent } from '../blogs/blogs.component';

export const blogsRoutes = [
  { path: 'blog-entry', component: BlogEntryComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', component: BlogsComponent }
];

