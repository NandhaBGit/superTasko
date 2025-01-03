import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperButtonComponent } from './super-button.component';

describe('SuperButtonComponent', () => {
  let component: SuperButtonComponent;
  let fixture: ComponentFixture<SuperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
