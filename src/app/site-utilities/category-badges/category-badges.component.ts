import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category-badges',
  templateUrl: './category-badges.component.html'
})
export class CategoryBadgesComponent implements OnInit {

  @Input()
  categories: Array<string> = new Array<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
