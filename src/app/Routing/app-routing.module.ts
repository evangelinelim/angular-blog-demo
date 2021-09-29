import { HomeComponent } from '../home/home.component';

export const MainRoutes  = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blogs', loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'jokes', loadChildren: () => import('../jokes/jokes.module').then(m => m.JokesModule)}
];
