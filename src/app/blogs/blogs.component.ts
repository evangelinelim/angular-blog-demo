import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html'
})
export class BlogsComponent implements OnInit {

  message: string = 'Totally up to you!!!!';
  constructor() { }

  ngOnInit(): void {
  }

}
