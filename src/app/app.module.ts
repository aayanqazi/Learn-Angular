import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule,Route }   from '@angular/router';
import { HttpModule,JsonpModule } from '@angular/http';
import {SearchUsersService} from './search-users.service';
import {APP_ROUTES} from "./routes";
import {HomeComponent} from "./home/home.component";
import {DirectoryComponent} from "./directory/directory.component";
import { FilterPipe} from './filter.pipe';
import {LoggingService} from './logging.service';
import {DataServiceService} from './data-service.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
  ],
  providers: [SearchUsersService,LoggingService,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
