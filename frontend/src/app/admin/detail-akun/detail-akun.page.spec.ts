import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailAkunPage } from './detail-akun.page';

describe('DetailAkunPage', () => {
  let component: DetailAkunPage;
  let fixture: ComponentFixture<DetailAkunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailAkunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
