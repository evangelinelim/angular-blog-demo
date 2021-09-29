import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';
import { JokePage } from './models/joke-page.model';
import { Joke } from './models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html'
})
export class JokesComponent implements OnInit {
  page: JokePage = new JokePage();

  constructor(private jokesService: JokesService) { }

  setJoke(jokes: Joke[]): void{
    this.jokesService.getJoke()
      .subscribe(data => {
        jokes.push(data);
      });

  }

  ngOnInit(): void {
    this.page.header.title = 'Get your laugh on!!';
    this.page.header.message = 'Lighten and brighten up your day with a Chuck Noris joke.';
    this.setJoke(this.page.jokes);
    this.setJoke(this.page.jokes);

    
  }

}
