import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MazeFormComponent } from './maze-form.component';
import { FormsModule } from '@angular/forms';
import { MazeService } from '../maze.service';
import { Api_Response } from '../api_response';
import { Grid } from '../grid';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('MazeFormComponent', () => {
  let component: MazeFormComponent;
  let fixture: ComponentFixture<MazeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MazeFormComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [
        {provide: MazeService, useClass: MazeServiceStub}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return three paths', () =>{
    component.model = new Grid(4, '---m ---- --x- --px')
    component.onSubmit();
    expect(component.allPaths.length).toEqual(3)
  })
  it('should (not) containe submitted info', () =>{
    const infoDiv = fixture.debugElement
      .query(By.css('.submitted-info'));
    if(component.submitted){expect(infoDiv.nativeNode.hidden).toBeTrue;}
    else{expect(infoDiv.nativeNode.hidden).toBeFalse;}
  })
});

class MazeServiceStub {

  getAllShortstPaths(){
    const dummyPaths = [['DOWN', 'LEFT', 'LEFT', 'DOWN', 'DOWN', 'RIGHT'],
    ['LEFT', 'DOWN', 'LEFT', 'DOWN', 'DOWN', 'RIGHT'], 
    ['LEFT', 'LEFT', 'DOWN', 'DOWN', 'DOWN', 'RIGHT']];
    return  of({
      error_flag: false,
      paths: dummyPaths
    })
  }
}