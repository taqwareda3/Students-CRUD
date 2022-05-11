import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalComponentComponent } from './add-modal-component.component';

describe('AddModalComponentComponent', () => {
  let component: AddModalComponentComponent;
  let fixture: ComponentFixture<AddModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
