import { HomeComponent } from '../home/home.component';

export const mainRoutes  = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blogs', loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'jokes', loadChildren: () => import('../jokes/jokes.module').then(m => m.JokesModule) },
  { path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountModule) },
  
];
