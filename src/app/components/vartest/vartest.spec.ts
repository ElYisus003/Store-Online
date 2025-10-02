import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vartest } from './vartest';

describe('Vartest', () => {
  let component: Vartest;
  let fixture: ComponentFixture<Vartest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vartest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vartest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
