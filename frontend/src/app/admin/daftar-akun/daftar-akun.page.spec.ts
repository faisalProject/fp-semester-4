import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarAkunPage } from './daftar-akun.page';

describe('DaftarAkunPage', () => {
  let component: DaftarAkunPage;
  let fixture: ComponentFixture<DaftarAkunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaftarAkunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
