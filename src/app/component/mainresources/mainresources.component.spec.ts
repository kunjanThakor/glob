import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainresourcesComponent } from './mainresources.component';

describe('MainresourcesComponent', () => {
  let component: MainresourcesComponent;
  let fixture: ComponentFixture<MainresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainresourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
