import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesBarComponent } from './files-bar.component';

describe('FilesBarComponent', () => {
  let component: FilesBarComponent;
  let fixture: ComponentFixture<FilesBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesBarComponent]
    });
    fixture = TestBed.createComponent(FilesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
