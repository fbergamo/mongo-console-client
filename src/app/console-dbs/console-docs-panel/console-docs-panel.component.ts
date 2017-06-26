import {Component, Input, OnInit} from '@angular/core';
import {DocsResponse} from 'assets/DocsResponse';

@Component({
  selector: 'app-console-docs-panel',
  templateUrl: './console-docs-panel.component.html',
  styleUrls: ['./console-docs-panel.component.css']
})
export class ConsoleDocsPanelComponent implements OnInit {


  @Input()
  docsResponse: DocsResponse;

  constructor() { }

  ngOnInit() {
  }

  isErrorReponse() {
   return this.docsResponse.error;
  }

  isOperationResponse() {
    return typeof this.docsResponse.resp === 'boolean';
  }


  isCountResponse() {
    return typeof this.docsResponse.resp === 'number' && this.docsResponse.resp > 0;
  }
}
