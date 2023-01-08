import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtenComponent } from './butten.component';

describe('ButtenComponent', () => {
  let component: ButtenComponent;
  let fixture: ComponentFixture<ButtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
