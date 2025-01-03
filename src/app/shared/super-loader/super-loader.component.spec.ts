import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLoaderComponent } from './super-loader.component';

describe('SuperLoaderComponent', () => {
  let component: SuperLoaderComponent;
  let fixture: ComponentFixture<SuperLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
