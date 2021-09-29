import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { jokeRoutes } from "../routing/jokes-routing.module";
import { JokesComponent } from "./jokes.component";

@NgModule({
    declarations: [
        JokesComponent
    ],
    imports: [
        RouterModule.forChild(jokeRoutes),
        CommonModule
    ],
    providers: [],
    bootstrap: [JokesComponent]
})
  export class JokesModule { }