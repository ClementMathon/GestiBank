import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsClientComponent } from './notifications-client.component';

describe('NotificationsClientComponent', () => {
  let component: NotificationsClientComponent;
  let fixture: ComponentFixture<NotificationsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
