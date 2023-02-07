import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


/*Faire une mise en page avec:
1- Un haut de page
2- Un menu de nav principal
3- Un corps de page
4- Un pied de page*/ 




@Component({
  selector: 'app-header',
  template: `
  <header>
    HAUT DE PAGE
  </header>
  `,
  

})
class HeaderComponent{}


@Component({
  selector: 'app-footer',
  template: '<footer>PIED DE PAGE</footer>',
})
class FooterComponent{}

@Component({
  selector:'app-root',
  template: `
  <app-header></app-header>
  <app-nav></app-nav>
  <app-footer></app-footer>
   `,
})
class AppComponent{}


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
class MainComponent{}

@NgModule({
  declarations: [AppComponent, HeaderComponent,MainComponent, FooterComponent],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent],
})
class AppModule {} //

const platformRef = platformBrowserDynamic();
platformRef.bootstrapModule(AppModule);