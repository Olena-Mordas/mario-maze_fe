import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PathListComponent } from './path-list.component';

describe('PathListComponent', () => {
  let component: PathListComponent;
  let fixture: ComponentFixture<PathListComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathListComponent,TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check list size', () =>{
    const allPaths=[['DOWN', 'DOWN', 'LEFT']];
    const listItems = testHostFixture.debugElement
      .queryAll(By.css('li'));
      expect(listItems.length).toEqual(allPaths.length);
  });


});
@Component({
  selector: `host-component`,
  template: `<path-list [pathList] = "[['DOWN', 'DOWN', 'LEFT']]"></path-list>`
})
class TestHostComponent {
}