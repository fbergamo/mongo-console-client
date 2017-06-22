import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleButtonPanelComponent } from './console-button-panel.component';

describe('ConsoleButtonPanelComponent', () => {
  let component: ConsoleButtonPanelComponent;
  let fixture: ComponentFixture<ConsoleButtonPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleButtonPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
