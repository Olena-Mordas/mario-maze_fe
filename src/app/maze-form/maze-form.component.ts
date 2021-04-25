import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Api_Response } from '../api_response';
import { Grid } from '../grid';
import { MazeService } from '../maze.service';

@Component({
  selector: 'maze-form',
  templateUrl: './maze-form.component.html',
  styleUrls: ['./maze-form.component.scss']
})
export class MazeFormComponent {

  constructor(private service: MazeService) { }
  
  model = new Grid(1,''); 
  allPaths=[]
  errorFlag = false;
  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.service.getAllShortstPaths(this.model.size,this.model.grid)
      .subscribe((response:Api_Response)=>{
        if(response.error_flag){this.errorFlag=true;}
        else {
          this.errorFlag=false;
          this.allPaths=response.paths;
        }
      });
  
  }

}
