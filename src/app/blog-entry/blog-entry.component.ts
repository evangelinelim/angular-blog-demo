import { Component, OnInit } from '@angular/core';
import { BlogContent } from '../models/blog-content.model';
import { BlogEntry } from '../models/blog-entry.model';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})

export class BlogEntryComponent implements OnInit {
    entry: BlogEntry = {
    id: 1,
    title: 'Cosmic Thoughts',
    author: 'John WordSmith',
    date: 'March 11, 2021',
    image: 'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
    categories: [],
    contents: []
  };
   blogContents : Array<BlogContent>;
  constructor() { }

  ngOnInit(): void {
    
  }

  initBlogEntry(): BlogEntry {
    var blogEntry: BlogEntry = {
      id: 1,
      title: 'Cosmic Thoughts',
      author: 'John WordSmith',
      date: 'March 11, 2021',
      image: 'https://dummyimage.com/900x400/ced4da/6c757d.jpg',
      categories: [],
      contents: []
    }

    return blogEntry;
  }
}