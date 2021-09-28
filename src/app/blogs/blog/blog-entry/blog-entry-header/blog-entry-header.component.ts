import { Component, OnInit, Input } from '@angular/core';
import { BlogEntryHeader } from 'src/app/blogs/models/blog-entry-header.model';

@Component({
  selector: 'blog-entry-header',
  templateUrl: './blog-entry-header.component.html'
})
export class BlogEntryHeaderComponent implements OnInit {

  @Input()
  header: BlogEntryHeader = new BlogEntryHeader();

  constructor() { }

  ngOnInit(): void {
  }

}
