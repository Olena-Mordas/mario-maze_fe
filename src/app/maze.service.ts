import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Api_Response } from './api_response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MazeService {

  url = 'http://127.0.0.1:8000/maze/';

  constructor(private http: HttpClient) { }

  getAllShortstPaths(n :number, grid:string):Observable<Api_Response>{
    return this.http.get(this.url +n+'&'+grid)
      .pipe(map((response:Api_Response) =>response));
  }
}
