import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogEntryContentResponse } from './models/blog-entry-content-response.model';
import { BlogEntryContent } from './models/blog-entry-content.model';
import { BlogEntry } from './models/blog-entry.model';
import { Blog } from './models/blog.model';
@Injectable({
  providedIn: 'any'
})
export class BlogsService {
  blog$ = new BehaviorSubject<Blog>(new Blog());
  private blogsUrl = 'http://localhost:3000/blogs/';
  private blogEntriesUrl = 'http://localhost:3000/blogEntries/';
  private blogContentsUrl = 'http://localhost:3000/blogContents/';  

  constructor(
    private http: HttpClient
  ) { }

  getBlog(): Observable<Blog> {
    let blogId = 1;

    this.http.get<Blog>((this.blogsUrl+blogId))
    .pipe(
      blogObs => {
        return this.http.get<Array<BlogEntryContentResponse>>((this.blogContentsUrl+`?blogId=${blogId}`))
        .pipe(
          blogContentsObs => {
            blogObs.subscribe(blog => {
              blogContentsObs.subscribe(blogContents =>{
                blog.blogEntries = new Array<BlogEntry>();
                blogContents.map(blogContent => {
                  const blogEntry = new BlogEntry();
                  blogEntry.id = blogContent.blogEntryId;                 
                  blogEntry.contents= blogContent.contents;
                  blog.blogEntries.push(blogEntry);
                });
                this.blog$.next(blog);                                
              });
            });
            return blogObs;
          }
          , 
          catchError(this.handleError<Blog>())
          );
      }, 
      catchError(this.handleError<Blog>())
      );

      return this.blog$;
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
