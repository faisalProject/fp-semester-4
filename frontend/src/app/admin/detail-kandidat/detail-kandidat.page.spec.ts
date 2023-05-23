import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailKandidatPage } from './detail-kandidat.page';

describe('DetailKandidatPage', () => {
  let component: DetailKandidatPage;
  let fixture: ComponentFixture<DetailKandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailKandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
