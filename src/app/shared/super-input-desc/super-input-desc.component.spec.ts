import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperInputDescComponent } from './super-input-desc.component';

describe('SuperInputDescComponent', () => {
  let component: SuperInputDescComponent;
  let fixture: ComponentFixture<SuperInputDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperInputDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperInputDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
