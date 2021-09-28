import { Component, OnInit, Input } from '@angular/core';
import { BlogEntryContent } from 'src/app/blogs/models/blog-entry-content.model';

@Component({
  selector: 'blog-entry-content',
  templateUrl: './blog-entry-content.component.html'
})
export class BlogEntryContentComponent implements OnInit {

  @Input()
  contents: Array<BlogEntryContent> = new Array<BlogEntryContent>();
  constructor() { }

  ngOnInit(): void {
  }

}
