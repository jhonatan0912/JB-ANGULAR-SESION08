import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeruComponent } from './components/peru/peru.component';
import { ChileComponent } from './components/chile/chile.component';
import { UruguayComponent } from './components/uruguay/uruguay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
