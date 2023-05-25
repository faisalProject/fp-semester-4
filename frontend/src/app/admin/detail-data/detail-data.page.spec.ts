import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailDataPage } from './detail-data.page';

describe('DetailDataPage', () => {
  let component: DetailDataPage;
  let fixture: ComponentFixture<DetailDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
