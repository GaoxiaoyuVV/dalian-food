import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavderComponent } from './navder.component';

describe('NavderComponent', () => {
  let component: NavderComponent;
  let fixture: ComponentFixture<NavderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
