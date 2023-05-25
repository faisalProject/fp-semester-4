import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahKandidatPage } from './tambah-kandidat.page';

describe('TambahKandidatPage', () => {
  let component: TambahKandidatPage;
  let fixture: ComponentFixture<TambahKandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TambahKandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
