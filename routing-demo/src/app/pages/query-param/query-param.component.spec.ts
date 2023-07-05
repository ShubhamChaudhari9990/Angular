import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParamComponent } from './query-param.component';

describe('QueryParamComponent', () => {
  let component: QueryParamComponent;
  let fixture: ComponentFixture<QueryParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryParamComponent]
    });
    fixture = TestBed.createComponent(QueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
