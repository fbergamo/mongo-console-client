import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleDbsComponent } from './console-dbs.component';

describe('ConsoleDbsComponent', () => {
  let component: ConsoleDbsComponent;
  let fixture: ComponentFixture<ConsoleDbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleDbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleDbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
