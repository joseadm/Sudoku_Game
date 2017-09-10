import { User } from './user';
import { Grid } from './grid';

class Game {
    user: User;
    grid: Grid;
    constructor(user: User, grid: Grid) {
        this.user = user;
        this.grid = grid;
    }
    toString() {
        console.log(this.user.getName()+"\n");
        console.log(this.grid.toString());
    }
}

var user = new User('Jose','jdelgado','macros98');
var grid = new Grid();
var game = new Game(user, grid);

game.toString();