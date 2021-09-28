import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'about-snippet',
  templateUrl: './about-snippet.component.html'
})
export class AboutSnippetComponent implements OnInit {

  @Input()
  content: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
