import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import {SearchUsersService} from './search-users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
