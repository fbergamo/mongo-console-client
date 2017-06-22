import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QueryRequest} from '../../../assets/QueryRequest';
import {ConsoleDbsService} from '../console-dbs.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-console-button-panel',
  templateUrl: './console-button-panel.component.html',
  styleUrls: ['./console-button-panel.component.css']
})
export class ConsoleButtonPanelComponent implements OnInit {
  @Input()
  queryReq: QueryRequest;


  @Output()
  responseEmit: EventEmitter<Observable<Response>> = new EventEmitter();

  findQuery: string;
  insertQuery: string;

  constructor(private consoleDbsSrv: ConsoleDbsService) { }

  ngOnInit() {}


  checkAndFind(e) {
    if (e.key === 'Enter') {
      this.queryReq.query = this.findQuery;
      this.responseEmit.emit(
        this.consoleDbsSrv.find(this.queryReq.databaseName, this.queryReq.collectionName, this.queryReq.query));
    }
  }

  checkAndInsertOne(e) {
    if (e.key === 'Enter') {
      this.queryReq.query = this.insertQuery;
      this.responseEmit.emit(
        this.consoleDbsSrv.insertOne(this.queryReq.databaseName, this.queryReq.collectionName, this.queryReq.query));
    }
  }


  findAll() {
    this.responseEmit.emit(
      this.consoleDbsSrv.findAll(this.queryReq.databaseName, this.queryReq.collectionName));
  }




  count() {
    this.responseEmit.emit(
      this.consoleDbsSrv.count(this.queryReq.databaseName, this.queryReq.collectionName));
  }


}
