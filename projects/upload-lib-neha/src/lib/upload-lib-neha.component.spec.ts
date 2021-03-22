import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLibNehaComponent } from './upload-lib-neha.component';

describe('UploadLibNehaComponent', () => {
  let component: UploadLibNehaComponent;
  let fixture: ComponentFixture<UploadLibNehaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLibNehaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLibNehaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
