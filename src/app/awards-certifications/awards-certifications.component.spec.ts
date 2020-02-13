import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsCertificationsComponent } from './awards-certifications.component';

describe('AwardsCertificationsComponent', () => {
  let component: AwardsCertificationsComponent;
  let fixture: ComponentFixture<AwardsCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
