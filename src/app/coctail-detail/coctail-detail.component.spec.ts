import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailDetailComponent } from './coctail-detail.component';

describe('CoctailDetailComponent', () => {
  let component: CoctailDetailComponent;
  let fixture: ComponentFixture<CoctailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctailDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
