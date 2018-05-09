export class ElectricYearly{

    public title: number;
    public months: Month[];

}
class Month {
    public month: string;
    public delta: number;
    public down: boolean;
    public kWatts: number;
    public cost: number;
}