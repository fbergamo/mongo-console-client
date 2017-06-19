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
    this.isButtonsShow = false;
    this.databaseName = e.srcElement.innerText;

    this.consoleDbsSrv.getCollection(this.databaseName).subscribe(
      response => { this.colls = response; }
    );
  }

  findAll() {
    this.consoleDbsSrv.findAll(this.databaseName, this.collectionName).subscribe(
      response => { this.docs = response; }
    );
  }

  showButtons(e) {
    this.isButtonsShow = false;
    this.collectionName = e.srcElement.innerText;
    this.isButtonsShow = true;
  }

}
