import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsoleDbsService {

  constructor(private http: Http) {}

  public getDatabases() {
    return this.http.get('http://localhost:9000/getDatabases')
      .map( resp => resp.json());
  }


  public getCollection(databaseName: string) {
    return this.http.post('http://localhost:9000/getCollections', {databaseName: databaseName})
      .map( resp => resp.json());
  }


  public findAll(databaseName: string, collectionName: string) {
    return this.http.post('http://localhost:9000/findAll',
      {databaseName: databaseName, collectionName: collectionName}
      ).map( resp => resp.json());
  }

  public find(databaseName: string, collectionName: string, query: any) {
    return this.http.post('http://localhost:9000/find',
      {databaseName: databaseName, collectionName: collectionName, query: query}
    ).map( resp => resp.json());
  }

  public insertOne(databaseName: string, collectionName: string, query: any) {
    return this.http.post('http://localhost:9000/insertOne',
      {databaseName: databaseName, collectionName: collectionName, query: query}
    ).map( resp => resp.json());
  }

  public count(databaseName: string, collectionName: string) {
    return this.http.post('http://localhost:9000/count',
      {databaseName: databaseName, collectionName: collectionName}
    ).map( resp => resp.json());
  }


}
