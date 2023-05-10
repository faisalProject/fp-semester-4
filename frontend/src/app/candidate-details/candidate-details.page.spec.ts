import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateDetailsPage } from './candidate-details.page';

describe('CandidateDetailsPage', () => {
  let component: CandidateDetailsPage;
  let fixture: ComponentFixture<CandidateDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CandidateDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
