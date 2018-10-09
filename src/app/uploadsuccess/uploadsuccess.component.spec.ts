import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsuccessComponent } from './uploadsuccess.component';

describe('UploadsuccessComponent', () => {
  let component: UploadsuccessComponent;
  let fixture: ComponentFixture<UploadsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
