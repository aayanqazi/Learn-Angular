import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninja: string;
  classess: object;
  constructor(private route: ActivatedRoute) {
    this.ninja = route.snapshot.params['id'];
    console.log("Ninja World ", this.ninja)
    this.classess = {'blue':true,'underline':false,'red':false};

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
  }

}
