import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid';
import { MazeService } from '../maze.service';

@Component({
  selector: 'maze-form',
  templateUrl: './maze-form.component.html',
  styleUrls: ['./maze-form.component.scss']
})
export class MazeFormComponent {

  constructor(private service: MazeService) { }
  //  --m -x- -p-
  model = new Grid(0,''); 
  allPaths=[]
  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.service.getAllShortstPaths(this.model.size,this.model.grid)
      .subscribe(paths=>this.allPaths = paths);

  }


}
