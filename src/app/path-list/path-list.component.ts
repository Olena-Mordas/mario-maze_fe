import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'path-list',
  templateUrl: './path-list.component.html',
  styleUrls: ['./path-list.component.scss']
})
export class PathListComponent  {

  @Input('pathList')
  allPaths=[]

}
