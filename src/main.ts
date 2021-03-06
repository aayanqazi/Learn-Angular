import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {APP_ROUTE_PROVIDER} from "./app/routes";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {HttpModule} from "@angular/http"
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,HttpModule);
