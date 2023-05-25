import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahDataSiswaPage } from './tambah-data-siswa.page';

describe('TambahDataSiswaPage', () => {
  let component: TambahDataSiswaPage;
  let fixture: ComponentFixture<TambahDataSiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TambahDataSiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
