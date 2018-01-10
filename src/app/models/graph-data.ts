export class GraphData {
    public weeks: number[];
    public months: number[];
    public years: number[];

    public constructor(){

    }
    public getData(key) {
    return  this[key];
    }
}