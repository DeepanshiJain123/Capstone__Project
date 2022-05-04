import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    FormsModule,
    AdminModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
