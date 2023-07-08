import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodointerfaceComponent } from './todointerface.component';

describe('TodointerfaceComponent', () => {
  let component: TodointerfaceComponent;
  let fixture: ComponentFixture<TodointerfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodointerfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodointerfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
