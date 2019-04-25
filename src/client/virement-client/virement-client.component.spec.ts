import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementClientComponent } from './virement-client.component';

describe('VirementClientComponent', () => {
  let component: VirementClientComponent;
  let fixture: ComponentFixture<VirementClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirementClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirementClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
