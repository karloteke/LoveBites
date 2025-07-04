import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationModermComponent } from './invitation-moderm.component';

describe('InvitationModermComponent', () => {
  let component: InvitationModermComponent;
  let fixture: ComponentFixture<InvitationModermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitationModermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationModermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
