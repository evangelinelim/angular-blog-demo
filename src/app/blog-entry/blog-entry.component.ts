import { Component, OnInit } from '@angular/core';
import { BlogEntry } from '../models/blog-models/blog-entry.model';

@Component({
  templateUrl: './blog-entry.component.html'
})

export class BlogEntryComponent implements OnInit {
  blogEntry: BlogEntry = new BlogEntry();
  constructor() { }

  ngOnInit(): void {
    this.blogEntry = this.initBlogEntryModel();
  }

  initBlogEntryModel(): BlogEntry
  {
    this.blogEntry.id = 1;
    this.blogEntry.header.title = 'Cosmic Thoughts';
    this.blogEntry.header.author = 'John WordSmith';
    this.blogEntry.header.date = 'March 11, 2021';
    this.blogEntry.header.categories = ['Science', 'Earth'];
    this.blogEntry.contents.push({
      order: 1,  
      contentType: 'paragragh',
      content: 'Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.'
    });
    this.blogEntry.contents.push({
      order: 2,  
      contentType: 'paragragh',
      content: 'The universe is large and old, and the ingredients for life as we know it are everywhere, so there\'s no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we\'ll see if we find that.'
    });
    this.blogEntry.contents.push({
      order: 3,  
      contentType: 'paragragh',
      content: 'If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.'
    });
    this.blogEntry.contents.push({
      order: 4,  
      contentType: 'heading',
      content: 'I have odd cosmic thoughts every day'
    });
    this.blogEntry.contents.push({
      order: 5,  
      contentType: 'paragragh',
      content: 'For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.'
    });
    this.blogEntry.contents.push({
      order: 6,  
      contentType: 'paragragh',
      content: 'Venus has a runaway greenhouse effect. I kind of want to know what happened there because we\'re twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It\'s bone dry today. Something bad happened there as well.'
    });
    return this.blogEntry;
  }
}