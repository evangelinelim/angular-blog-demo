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
  constructor() { }

  ngOnInit(): void {
    let _blogContents = new Array<BlogContent>();
    _blogContents.push({
      order: 1,  
      contentType: 'paragragh',
      content: 'Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.'
    });
    _blogContents.push({
      order: 2,  
      contentType: 'paragragh',
      content: 'The universe is large and old, and the ingredients for life as we know it are everywhere, so there\'s no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we\'ll see if we find that.'
    });
    _blogContents.push({
      order: 3,  
      contentType: 'paragragh',
      content: 'If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.'
    });
    _blogContents.push({
      order: 4,  
      contentType: 'heading',
      content: 'I have odd cosmic thoughts every day'
    });
    _blogContents.push({
      order: 5,  
      contentType: 'paragragh',
      content: 'For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.'
    });
    _blogContents.push({
      order: 6,  
      contentType: 'paragragh',
      content: 'Venus has a runaway greenhouse effect. I kind of want to know what happened there because we\'re twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It\'s bone dry today. Something bad happened there as well.'
    });
    this.entry.contents = _blogContents;
    this.entry.categories = ['Science', 'Earth'];
  }
}