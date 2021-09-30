import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BlogEntryContent } from './models/blog-entry-content.model';
import { BlogEntry } from './models/blog-entry.model';
import { Blog } from './models/blog.model';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogsUrl = 'http://localhost:3000/blog';

  constructor(
    private http: HttpClient
  ) { }

  getBlog(): Observable<Blog> {
    return this.http.get<Blog>(this.blogsUrl)
    .pipe(data => data, catchError(this.handleError<Blog>()));
    // return this.http.get<Blog>(`${this.blogsUrl}/${id}`)
    // .pipe(data => data, catchError(this.handleError<Blog>()));
  }

  // addNewEntryContent(blogId: number, blogEntryId: number, content: BlogEntryContent): Observable<BlogEntry> {
  //   let blog = this.getBlog(blogId); //subscribe to observable
  //   let blogEntry = blog.blogEntries(blogEntryId);//filter blog entries to look for blogentryid
  //   blogEntry.contents.push(content);
  //   blog.blogEntries[blogEntryId] = blogEntry;
  //   return this.http.put<BlogEntry>()
  // }
  

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
        
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
