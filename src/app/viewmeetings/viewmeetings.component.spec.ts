import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmeetingsComponent } from './viewmeetings.component';

describe('ViewmeetingsComponent', () => {
  let component: ViewmeetingsComponent;
  let fixture: ComponentFixture<ViewmeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmeetingsComponent]
    });
    fixture = TestBed.createComponent(ViewmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
