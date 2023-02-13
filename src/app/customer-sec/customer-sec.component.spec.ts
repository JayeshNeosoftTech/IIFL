import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSecComponent } from './customer-sec.component';

describe('CustomerSecComponent', () => {
  let component: CustomerSecComponent;
  let fixture: ComponentFixture<CustomerSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
