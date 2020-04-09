import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { AppComponent } from './app.component'
import { Beagle } from './beagle.module'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    Beagle,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
