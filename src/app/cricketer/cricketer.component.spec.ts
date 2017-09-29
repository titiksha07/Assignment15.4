import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerComponent } from './cricketer.component';

describe('CricketerComponent', () => {
  let component: CricketerComponent;
  let fixture: ComponentFixture<CricketerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
