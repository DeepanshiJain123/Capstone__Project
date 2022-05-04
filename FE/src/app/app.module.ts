import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    FormsModule
>>>>>>> f804b55e1d1d29cb4ec5b2a9a22afbefe10f3564
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
