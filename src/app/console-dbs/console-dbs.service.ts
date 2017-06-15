import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsoleDbsService{

  constructor(private http: Http) {}

  public getDatabases() {
    return this.http.get('http://localhost:9000/getDatabases')
      .map( resp => resp.json());
  }


  public getCollection(databaseName: string) {
    return this.http.post('http://localhost:9000/getCollections', {databaseName: databaseName})
      .map( resp => resp.json());
  }
}
