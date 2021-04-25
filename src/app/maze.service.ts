import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Api_Response } from './api_response';

@Injectable({
  providedIn: 'root'
})
export class MazeService {

  url = 'http://127.0.0.1:8000/maze';

  constructor(private http: HttpClient) { }

  getAllShortstPaths(n :number, grid:string){
    return this.http.get(this.url + '?N='+n+'&grid='+grid)
      .pipe(map((response:Api_Response) =>response));
  }
}
