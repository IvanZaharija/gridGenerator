export class GridDataModel {
    public col: number;
    public row: number;
    public size: string;

    constructor(col:number, row: number, size: string){
        this.col = col;
        this.row = row;
        this.size = size;
    }
}