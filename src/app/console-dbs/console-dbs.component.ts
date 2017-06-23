import { Component, OnInit } from '@angular/core';
import {ConsoleDbsService} from './console-dbs.service';
import {QueryRequest} from '../../assets/QueryRequest';
import {DocsResponse} from '../../assets/DocsResponse';

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

  queryReq: QueryRequest;
  isButtonsShow: boolean;

  docsResponse: DocsResponse;

  constructor(private consoleDbsSrv: ConsoleDbsService) { }

  ngOnInit() {
    this.isButtonsShow = false;
    this.queryReq = new QueryRequest('', '', '');
    this.docsResponse = new DocsResponse('', false);
    this.consoleDbsSrv.getDatabases().subscribe(
      response => { this.dbs = response; },
      error => {this.error = error; }
    );
  }


  getResponse(responseEvent) {
    this.cleanFields();
    responseEvent.subscribe(
      response => {this.docsResponse.resp = response, this.docsResponse.error = false; },
      error => {this.docsResponse.resp = error, this.docsResponse.error = true; }
    );
  }

  getCollection(e) {
    this.cleanFields();

    this.colls = null;
    this.isButtonsShow = false;
    this.queryReq.databaseName = e.srcElement.innerText;

    this.consoleDbsSrv.getCollection(this.queryReq.databaseName).subscribe(
      response => { this.colls = response; },
      error => {this.error = error; }
    );
  }


  showButtons(e) {
    this.queryReq.query = '';
    this.isButtonsShow = false;
    this.queryReq.collectionName = e.srcElement.innerText;
    this.isButtonsShow = true;
  }

  cleanFields() {
    this.docs = null;
    this.counter = null;
    this.error = null;
  }

}
