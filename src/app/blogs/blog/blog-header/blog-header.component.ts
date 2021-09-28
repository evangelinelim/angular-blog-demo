import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'blog-header',
  templateUrl: './blog-header.component.html'
})
export class BlogHeaderComponent implements OnInit {

  @Input()
  blog: Blog = new Blog();

  constructor() { }

  ngOnInit(): void {
  }

}
