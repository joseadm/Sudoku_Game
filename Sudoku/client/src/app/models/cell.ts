export class Cell {
    value: number;
    row: number;
    col: number;
    error: boolean;
    lightError: boolean;
    visible: boolean;
    fixed: boolean;
    constructor(value: number, row: number, col: number) {
        this.value = value;
        this.row = row;
        this.col = col;
        this.error = false;
        this.lightError = false;
        this.fixed = false;
    }
    setValue(value: number) {
        this.value = value;
        this.visible = value > 0;
    }
    getValue() {
        return this.value;
    }
}