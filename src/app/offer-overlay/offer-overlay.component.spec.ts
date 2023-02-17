import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferOverlayComponent } from './offer-overlay.component';

describe('OfferOverlayComponent', () => {
  let component: OfferOverlayComponent;
  let fixture: ComponentFixture<OfferOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
