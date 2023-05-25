import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDataSiswaPage } from './edit-data-siswa.page';

describe('EditDataSiswaPage', () => {
  let component: EditDataSiswaPage;
  let fixture: ComponentFixture<EditDataSiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditDataSiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
