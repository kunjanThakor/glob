import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllParticipantComponent } from './admin-all-participant.component';

describe('AdminAllParticipantComponent', () => {
  let component: AdminAllParticipantComponent;
  let fixture: ComponentFixture<AdminAllParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAllParticipantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAllParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
