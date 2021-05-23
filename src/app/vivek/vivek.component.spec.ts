import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivekComponent } from './vivek.component';

describe('VivekComponent', () => {
  let component: VivekComponent;
  let fixture: ComponentFixture<VivekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VivekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VivekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
