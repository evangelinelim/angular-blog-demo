import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'blog-entry-image',
  templateUrl: './blog-entry-image.component.html',
})

export class BlogEntryImageComponent implements OnInit {

  @Input()
  image: string = ''; 
  constructor() { }

  ngOnInit(): void {
  }
  

}
