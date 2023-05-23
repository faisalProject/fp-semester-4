import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarSiswaPage } from './daftar-siswa.page';

describe('DaftarSiswaPage', () => {
  let component: DaftarSiswaPage;
  let fixture: ComponentFixture<DaftarSiswaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaftarSiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
