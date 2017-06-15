import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ConsoleDbsService} from "./console-dbs.service";

@Component({
  selector: 'app-console-dbs',
  templateUrl: './console-dbs.component.html',
  styleUrls: ['./console-dbs.component.css']
})
export class ConsoleDbsComponent implements OnInit {

  dbs: any[];
  colls: any[];

  constructor(private consoleDbsSrv: ConsoleDbsService) { }

  ngOnInit() {
    this.consoleDbsSrv.getDatabases().subscribe(
      response => { this.dbs = response }
    );
  }


  getCollection(e) {
    let databaseName = e.srcElement.innerText;
    this.consoleDbsSrv.getCollection(databaseName).subscribe(
      response => { this.colls = response; }
    );
  }

}
