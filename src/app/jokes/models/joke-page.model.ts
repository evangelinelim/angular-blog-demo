import { JokePageHeader } from "./joke-page-header.model";
import { Joke } from "./joke.model";

export class JokePage {
    header: JokePageHeader = new JokePageHeader();
    jokes: Array<Joke> = new Array<Joke>();

}