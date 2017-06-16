import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {LoggingService} from "../logging.service";
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  ninja: string;
  newTest: object;
  classess: object;
  arrayNinja:string[];
  term = 'Tour of Heroes';
  constructor(private route: ActivatedRoute,private dataService:DataServiceService,private ninjaService: LoggingService) {
    this.ninja = route.snapshot.params['id'];
    console.log("Ninja World ", this.ninja)
    this.classess = {'blue':true,'underline':false,'red':false};
    this.arrayNinja = ["arsalan","sabir","ahmed","arbaz","notfound"];
  }
  logIt(){
    this.ninjaService.log();
  }
  red() {
    this.classess = {'blue':false,'underline':false,'red':true};
  }

blue() {
    this.classess = {'blue':true,'underline':false,'red':false};
  }
  underline() {
    this.classess = {'blue':true,'underline':true,'red':false};
  }
  ngOnInit() {
    this.dataService.fetchData().subscribe((data)=>{
      console.log(data)
      this.newTest = data.data
    });
  }

}
