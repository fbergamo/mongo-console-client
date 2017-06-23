import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleDocsPanelComponent } from './console-docs-panel.component';

describe('ConsoleDocsPanelComponent', () => {
  let component: ConsoleDocsPanelComponent;
  let fixture: ComponentFixture<ConsoleDocsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleDocsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleDocsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
