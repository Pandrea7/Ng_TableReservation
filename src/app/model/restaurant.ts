export class Restaurant{

    private id: number;
    private name: string;
    private capacityPerHour: number;
    private openHour: number;
    private closeHour: number;

    public constructor(){

        this.id = 0;
        this.name = "";
        this.capacityPerHour = 0;
        this.openHour = 0;
        this.closeHour = 0;
    }

    public getId(): number {
        return this.id;
    }
    public setId(value: number) {
        this.id = value;
    }

    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }

    public getCapacityPerHour(): number {
        return this.capacityPerHour;
    }
    public setCapacityPerHour(value: number) {
        this.capacityPerHour = value;
    }

    public getOpenHour(): number {
        return this.openHour;
    }
    public setOpenHour(value: number) {
        this.openHour = value;
    }

    public getCloseHour(): number {
        return this.closeHour;
    }
    public setCloseHour(value: number) {
        this.closeHour = value;
    }
}