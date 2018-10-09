import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfailComponent } from './uploadfail.component';

describe('UploadfailComponent', () => {
  let component: UploadfailComponent;
  let fixture: ComponentFixture<UploadfailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadfailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
