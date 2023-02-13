import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSecComponent } from './newsletter-sec.component';

describe('NewsletterSecComponent', () => {
  let component: NewsletterSecComponent;
  let fixture: ComponentFixture<NewsletterSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
