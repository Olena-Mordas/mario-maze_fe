import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Api_Response } from './api_response';
import { Grid } from './grid';

import { MazeService } from './maze.service';

describe('MazeServiceService', () => {
  let service: MazeService;
  let injector: TestBed;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MazeService]
    });
    service = TestBed.inject(MazeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('all shortest paths for grid', () => {
    let grid = new Grid(3, '--m --- -x- -p-');
    let dummyResponse ={error_flag: false, paths: [['DOWN', 'DOWN', 'LEFT']]};
    service.getAllShortstPaths(grid.size,grid.grid).subscribe(res=>{
      expect(res).toEqual(dummyResponse);
    })
    const req = httpMock.expectOne('http://127.0.0.1:8000/maze' + '?N='+grid.size+'&grid='+grid.grid);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

});
