import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  constructor(private http:Http) { }

  fetchData(){
    return this.http.get('https://reqres.in/api/users?page=2').map((res)=>res.json())
  }
}
