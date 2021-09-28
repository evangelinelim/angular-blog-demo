import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const MainRoutes  = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blogs', loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule) }
];
