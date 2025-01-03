import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperErrorComponent } from './super-error.component';

describe('SuperErrorComponent', () => {
  let component: SuperErrorComponent;
  let fixture: ComponentFixture<SuperErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
