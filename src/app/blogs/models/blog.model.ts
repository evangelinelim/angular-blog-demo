import { BlogEntry } from "./blog-entry.model";

export class Blog {
  id: number = 0;
  author: string = '';
  dateCreated: string = '';
  title: string = '';
  aboutContent: string = '';
  summary: string = '';
  categories: Array<string> =  new Array<string>();
  blogEntries: Array<BlogEntry> =  new Array<BlogEntry>();
}