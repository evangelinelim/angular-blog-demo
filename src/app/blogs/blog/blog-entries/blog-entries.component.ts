import { Component, OnInit, Input } from '@angular/core';
import { BlogEntry } from '../../models/blog-entry.model';

@Component({
  selector: 'blog-entries',
  templateUrl: './blog-entries.component.html'
})
export class BlogEntriesComponent implements OnInit {

  @Input()
  blogEntries: Array<BlogEntry> =  new Array<BlogEntry>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
