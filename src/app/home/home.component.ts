import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Thoughts and Giggles';
  slides = [
    {image: 'assets/images/norris1.jfif'},
    {image: 'assets/images/norris2.jfif'},
    {image: 'assets/images/norris3.jfif'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
