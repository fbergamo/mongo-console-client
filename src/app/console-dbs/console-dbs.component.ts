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
  error: any;
  counter: number;

  databaseName: string;
  collectionName: string;
  isButtonsShow: boolean;
  query: string;

  constructor(private consoleDbsSrv: ConsoleDbsService) { }

  ngOnInit() {
    this.isButtonsShow = false;
    this.consoleDbsSrv.getDatabases().subscribe(
      response => { this.dbs = response; }
    );
  }


  getCollection(e) {
    this.cleanFields();

    this.colls = null;
    this.isButtonsShow = false;
    this.databaseName = e.srcElement.innerText;

    this.consoleDbsSrv.getCollection(this.databaseName).subscribe(
      response => { this.colls = response; },
      error => {this.error = error; }
    );
  }

  findAll() {
    this.cleanFields();
    this.consoleDbsSrv.findAll(this.databaseName, this.collectionName).subscribe(
      response => { this.docs = response; },
      error => {this.error = error; }
    );
  }


  checkAndFind(e) {
    if (e.key === 'Enter') {
      this.cleanFields();

      this.consoleDbsSrv.find(this.databaseName, this.collectionName, this.query).subscribe(
        response => { this.docs = response; },
        error => {this.error = error; }
      );
    }
  }


  count() {
    this.cleanFields();
    this.consoleDbsSrv.count(this.databaseName, this.collectionName).subscribe(
      response => { this.counter = response; },
      error => {this.error = error; }
    );
  }

  showButtons(e) {
    this.isButtonsShow = false;
    this.collectionName = e.srcElement.innerText;
    this.isButtonsShow = true;
  }

  cleanFields() {
    this.docs = null;
    this.counter = null;
    this.error = null;
  }

}
