import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataSuaraPage } from './data-suara.page';

describe('DataSuaraPage', () => {
  let component: DataSuaraPage;
  let fixture: ComponentFixture<DataSuaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataSuaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
