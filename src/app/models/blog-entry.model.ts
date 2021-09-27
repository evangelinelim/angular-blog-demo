import { BlogContent } from "./blog-content.model";

export class BlogEntry {
  id: number = 0;
  author: string = '';
  date: string = '';
  title: string = '';
  image: string = '';
  categories: Array<string> = [];
  contents: Array<BlogContent> = [];
}


