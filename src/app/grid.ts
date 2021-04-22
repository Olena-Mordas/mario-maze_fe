export class Grid {

  public grid: string;

    constructor(
      public size: number,
      grid: string,
    ) { this.grid = grid.replace(' ',''); }
  
}