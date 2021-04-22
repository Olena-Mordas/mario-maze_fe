import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MazeService {

  url = 'http://127.0.0.1:8000/maze';

  constructor(private http: HttpClient) { }

  paths=[];

  getAllShortstPaths(n :number, grid:string){
    this.http.get(this.url + '?N='+n+'&grid='+grid)
      .subscribe((response:any)=>{/*this.paths=response.paths[0];*/console.log(response);});
  }
}
