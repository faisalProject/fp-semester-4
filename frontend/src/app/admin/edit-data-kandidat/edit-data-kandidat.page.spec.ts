import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDataKandidatPage } from './edit-data-kandidat.page';

describe('EditDataKandidatPage', () => {
  let component: EditDataKandidatPage;
  let fixture: ComponentFixture<EditDataKandidatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditDataKandidatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
