import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidatePage } from './candidate.page';

describe('CandidatePage', () => {
  let component: CandidatePage;
  let fixture: ComponentFixture<CandidatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CandidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
