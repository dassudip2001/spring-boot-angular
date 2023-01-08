import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteButtanComponent } from './delete-buttan.component';

describe('DeleteButtanComponent', () => {
  let component: DeleteButtanComponent;
  let fixture: ComponentFixture<DeleteButtanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteButtanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteButtanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
