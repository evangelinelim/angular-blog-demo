import { BlogEntryContent } from "./blog-entry-content.model";
import { BlogEntryHeader } from "./blog-entry-header.model";

export class BlogEntry {
  id: number = 0;
  header: BlogEntryHeader = new BlogEntryHeader();  
  image: string = 'https://dummyimage.com/900x400/ced4da/6c757d.jpg';
  contents: Array<BlogEntryContent> = new Array<BlogEntryContent>();
}


