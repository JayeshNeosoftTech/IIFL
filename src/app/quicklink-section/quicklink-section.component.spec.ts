import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinkSectionComponent } from './quicklink-section.component';

describe('QuicklinkSectionComponent', () => {
  let component: QuicklinkSectionComponent;
  let fixture: ComponentFixture<QuicklinkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicklinkSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicklinkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
