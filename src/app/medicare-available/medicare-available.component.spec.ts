import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareAvailableComponent } from './medicare-available.component';

describe('MedicareAvailableComponent', () => {
  let component: MedicareAvailableComponent;
  let fixture: ComponentFixture<MedicareAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicareAvailableComponent]
    });
    fixture = TestBed.createComponent(MedicareAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
