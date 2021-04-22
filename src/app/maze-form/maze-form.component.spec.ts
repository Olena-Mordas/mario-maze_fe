import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeFormComponent } from './maze-form.component';

describe('MazeFormComponent', () => {
  let component: MazeFormComponent;
  let fixture: ComponentFixture<MazeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
