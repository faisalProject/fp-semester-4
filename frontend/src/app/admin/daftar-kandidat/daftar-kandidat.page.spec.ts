import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarKandidatPage } from './daftar-kandidat.page';

describe('DaftarKandidatPage', () => {
  let component: DaftarKandidatPage;
  let fixture: ComponentFixture<DaftarKandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaftarKandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
