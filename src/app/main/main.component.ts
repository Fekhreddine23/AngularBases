import { Component } from "@angular/core";

@Component({
    selector:'app-nav',
    template: `
    <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#news"> News </a>
    <a href="#contact"> Contact </a>
    <a href="#about"> About </a>
    </div>
    `
  })
  export class MainComponent{}