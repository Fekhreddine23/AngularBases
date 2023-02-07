import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import {BrowserModule} from "@angular/platform-browser"
@NgModule({
    declarations: [AppComponent, HeaderComponent,MainComponent, FooterComponent],

    imports: [ BrowserModule ],
    bootstrap: [AppComponent],
  })

  export class AppModule{}
  