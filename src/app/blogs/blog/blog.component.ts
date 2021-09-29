import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  blog: Blog = new Blog();

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.setBlog();
  }

  setBlog(): void{
    this.blogsService.getBlog()
      .subscribe(data => {
        this.blog = data;
      });

  } 
}
