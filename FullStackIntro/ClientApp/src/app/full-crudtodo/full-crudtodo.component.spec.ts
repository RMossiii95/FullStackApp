import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCRUDTodoComponent } from './full-crudtodo.component';

describe('FullCRUDTodoComponent', () => {
  let component: FullCRUDTodoComponent;
  let fixture: ComponentFixture<FullCRUDTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCRUDTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCRUDTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
