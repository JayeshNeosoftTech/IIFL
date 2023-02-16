import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingSecComponent } from './offering-sec.component';

describe('OfferingSecComponent', () => {
  let component: OfferingSecComponent;
  let fixture: ComponentFixture<OfferingSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferingSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
