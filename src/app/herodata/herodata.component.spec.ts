import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodataComponent } from './herodata.component';

describe('HerodataComponent', () => {
  let component: HerodataComponent;
  let fixture: ComponentFixture<HerodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerodataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
