import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreofferSecComponent } from './moreoffer-sec.component';

describe('MoreofferSecComponent', () => {
  let component: MoreofferSecComponent;
  let fixture: ComponentFixture<MoreofferSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreofferSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreofferSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
