import { Component, OnInit } from '@angular/core';
import {ConsoleDbsService} from './console-dbs.service';

@Component({
  selector: 'app-console-dbs',
  templateUrl: './console-dbs.component.html',
  styleUrls: ['./console-dbs.component.css']
})
export class ConsoleDbsComponent implements OnInit {

  dbs: any[];
  colls: any[];
  docs: any[];
  counter: number;

  databaseName: string;
  collectionName: string;
  isButtonsShow: boolean;

  constructor(private consoleDbsSrv: ConsoleDbsService) { }

  ngOnInit() {
    this.isButtonsShow = false;
    this.consoleDbsSrv.getDatabases().subscribe(
      response => { this.dbs = response; }
    );
  }


  getCollection(e) {
    this.docs = null;
    this.colls = null;
    this.counter = null;
    this.isButtonsShow = false;
    this.databaseName = e.srcElement.innerText;

    this.consoleDbsSrv.getCollection(this.databaseName).subscribe(
      response => { this.colls = response; }
    );
  }

  findAll() {
    this.docs = null;
    this.counter = null;
    this.consoleDbsSrv.findAll(this.databaseName, this.collectionName).subscribe(
      response => { this.docs = response; }
    );
  }


  count() {
    this.docs = null;
    this.counter = null;
    this.consoleDbsSrv.count(this.databaseName, this.collectionName).subscribe(
      response => { this.counter = response; }
    );
  }

  showButtons(e) {
    this.isButtonsShow = false;
    this.collectionName = e.srcElement.innerText;
    this.isButtonsShow = true;
  }

}
