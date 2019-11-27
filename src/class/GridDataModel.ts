export class GridDataModel {
    public columnValue: number;
    public rowValue: number;
    public sizeValue: string;

    constructor(columnValue:number, rowValue: number, sizeValue: string){
        this.columnValue = columnValue;
        this.rowValue = rowValue;
        this.sizeValue = sizeValue;
    }
}