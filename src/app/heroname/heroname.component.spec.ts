import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeronameComponent } from './heroname.component';

describe('HeronameComponent', () => {
  let component: HeronameComponent;
  let fixture: ComponentFixture<HeronameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeronameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeronameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
