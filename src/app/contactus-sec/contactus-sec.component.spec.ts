import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusSecComponent } from './contactus-sec.component';

describe('ContactusSecComponent', () => {
  let component: ContactusSecComponent;
  let fixture: ComponentFixture<ContactusSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
