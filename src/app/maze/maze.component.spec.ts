import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MazeComponent } from './maze.component';

describe('MazeComponent', () => {
  let component: MazeComponent;
  let fixture: ComponentFixture<MazeComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazeComponent,TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check table size', () =>{
    const size=4;
    const tableRows = testHostFixture.debugElement
      .queryAll(By.css('tr'));
      expect(tableRows.length).toEqual(size);
    const tableCells = testHostFixture.debugElement
      .queryAll(By.css('td'));
      expect(tableCells.length).toEqual(size*size);
  });

  it('check table content', () =>{
    const structure = '---m ---- --x- --px';
    const tableCells = testHostFixture.debugElement
      .queryAll(By.css('td'));

    tableCells.forEach((cell, index) => {
      expect(cell.nativeNode.innerText).toEqual(structure.replace(/\s/g, '').charAt(index))
    });
  })

});
@Component({
  selector: `host-component`,
  template: `<maze [size] = "4" structure = "---m ---- --x- --px" ></maze>`
})
class TestHostComponent {
}