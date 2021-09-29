import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JokeResponse } from './models/joke-response.model';
import { Joke } from './models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private jokesUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(
    private http: HttpClient
  ) { }

  getJoke(): Observable<Joke> {
    return this.http.get<JokeResponse>(this.jokesUrl)
    .pipe(map(function(data){
      let joke = new Joke();
      joke.content = data.value;
      joke.category = 'Random';
      joke.title = 'Random joke of the day';
      return joke;
    }));
 
    // .pipe(
    //   catchError(this.handleError<JokeResponse[]>([]))
    // );    
 }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
        
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
