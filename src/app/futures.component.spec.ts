import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesComponent } from './futures.component';

describe('FuturesComponent', () => {
  let component: FuturesComponent;
  let fixture: ComponentFixture<FuturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
