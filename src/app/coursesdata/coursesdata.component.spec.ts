import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesdataComponent } from './coursesdata.component';

describe('CoursesdataComponent', () => {
  let component: CoursesdataComponent;
  let fixture: ComponentFixture<CoursesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
