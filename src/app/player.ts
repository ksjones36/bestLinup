export class Player {
    id: number;
    playerName: string;
    ppg: number;
    projectedPoints: number;
    position: string;
    salary: number;
    adjusted: number;

    constructor() {
        this.playerName = '';
        this.ppg = 0.00;
        this.projectedPoints = 0.00;
        this.position = '';
        this.salary = 0;
        this.adjusted = 0.00;
    }
}
