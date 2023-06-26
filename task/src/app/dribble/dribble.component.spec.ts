import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DribbleComponent } from './dribble.component';

describe('DribbleComponent', () => {
  let component: DribbleComponent;
  let fixture: ComponentFixture<DribbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DribbleComponent]
    });
    fixture = TestBed.createComponent(DribbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
