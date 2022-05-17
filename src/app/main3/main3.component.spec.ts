import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main3Component } from './main3.component';

describe('Main3Component', () => {
  let component: Main3Component;
  let fixture: ComponentFixture<Main3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
