import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppSecComponent } from './mobile-app-sec.component';

describe('MobileAppSecComponent', () => {
  let component: MobileAppSecComponent;
  let fixture: ComponentFixture<MobileAppSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
