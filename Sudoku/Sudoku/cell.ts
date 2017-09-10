export class Cell {
    value: number;
    row: number;
    col: number;
    constructor(value: number, row: number, col: number) {
        this.value = value;
        this.row = row;
        this.col = col;
    }
    setValue(value: number) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}