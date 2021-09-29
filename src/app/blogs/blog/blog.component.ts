import { Component, OnInit } from '@angular/core';
import { BlogEntry } from '../models/blog-entry.model';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  blog: Blog = new Blog();
  constructor() { }

  ngOnInit(): void {
    this.blog = this.initBlogModel();
  }

  initBlogModel(): Blog
  {
    this.blog.id = 1;
    this.blog.title = 'Cosmic Thoughts ... a Trip Through the Cosmos';
    this.blog.author = 'John WordSmith';
    this.blog.dateCreated = 'July 28, 2020';
    this.blog.categories = ['Science', 'Earth', 'World'];
    this.blog.aboutContent = 'Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.';
    this.blog.summary = 'Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.';
    this.blog.blogEntries.push(this.initBlogEntryModel(1));
    this.blog.blogEntries.push(this.initBlogEntryModel(2));
    this.blog.blogEntries.push(this.initBlogEntryModel(3));
    return this.blog;
  }

  initBlogEntryModel(id:number): BlogEntry
  {
    let blogEntry = new BlogEntry();
    blogEntry.id = id;
    blogEntry.header.title = 'Cosmic Thoughts ' + id;
    blogEntry.header.author = 'John WordSmith';
    blogEntry.header.date = 'March 11, 2021';
    blogEntry.header.categories = ['Science', 'Earth'];
    blogEntry.contents.push({
      order: 1,  
      contentType: 'paragragh',
      content: 'Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.'
    });
    blogEntry.contents.push({
      order: 2,  
      contentType: 'paragragh',
      content: 'The universe is large and old, and the ingredients for life as we know it are everywhere, so there\'s no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we\'ll see if we find that.'
    });
    blogEntry.contents.push({
      order: 3,  
      contentType: 'paragragh',
      content: 'If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.'
    });
    blogEntry.contents.push({
      order: 4,  
      contentType: 'heading',
      content: 'I have odd cosmic thoughts every day'
    });
    blogEntry.contents.push({
      order: 5,  
      contentType: 'paragragh',
      content: 'For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.'
    });
    blogEntry.contents.push({
      order: 6,  
      contentType: 'paragragh',
      content: 'Venus has a runaway greenhouse effect. I kind of want to know what happened there because we\'re twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It\'s bone dry today. Something bad happened there as well.'
    });
    return blogEntry;
  }
}
