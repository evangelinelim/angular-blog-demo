import { BlogEntryContent } from "./blog-entry-content.model";

export class BlogEntryContentResponse {
  id: number = 0;
  blogId: number = 0;
  blogEntryId: number = 0;
  contents: Array<BlogEntryContent> = new Array<BlogEntryContent>();
}


