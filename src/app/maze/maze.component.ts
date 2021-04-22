import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.scss']
})
export class MazeComponent {

  @Input('size')
  size:number;

  @Input('structure')
  structure:string;
  
  constructor() { }


  counter(n: number): Array<number> {
    return Array(n);
  }
}
