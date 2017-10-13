import { Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';
import { SudokuService } from '../services/sudoku.service';

import { GLOBAL } from '../services/global';
import { User } from '../models/user';
import { Cell } from '../models/cell';
import { Grid } from '../models/grid';
import { Game } from '../models/game';

import * as p5 from 'p5';

import { SudokuSolver } from '../models/solver/solver';
import { Generator } from '../models/solver/generator';
//import { SudokuSolver } from '../models/solver/solver';

@Component({
    selector: 'sudoku',
    templateUrl: '../views/sudoku.html',
    providers: [UserService, SudokuService],
    host: {'window:beforeunload':'setConfirmUnload'}
})

export class SudokuComponent implements OnInit{
    public identity;
    public token;
    public titulo: string;
    public game: Game;
    public game_inserted: Game;
    public user: User;
    public grid: Grid;
    public gridMongo: Grid;
    public gameMongo: Game;
    public alertRegister;
    public range;
    public saved_grid;
    public unloadMessage;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _sudokuService: SudokuService
    ){
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.grid = new Grid();
        this.gridMongo = new Grid();
        this.game = new Game(this.user, this.grid);
        this.game_inserted = new Game(this.user, this.grid);
        this.gameMongo = new Game(new User('','','',''), new Grid());
        this.titulo = 'Jugar Sudoku';
        this.range = Array.from({length : 9}, (_, i) => i);
    }
  
    @HostListener('window:beforeunload', [ '$event' ])
    beforeUnloadHander(event) {
      localStorage.setItem('saved_grid', JSON.stringify(this.grid));
    }    

    ngOnInit() {
        console.log('sudoku.compose.ts cargando...');
        const s = (p) => {
                  let canvas;
                  p.setup = () => {
                    canvas = p.createCanvas(451, 451);
                    canvas.parent('sudokuGrid');
                    p.background(240);
                  }

                  p.draw = () => {
                    p.frameRate(15);
                    p.drawCells();
                    if(this.game.checkGrid()) {
                        p.fill(50, 255, 50, 128);
                        p.rect(0, 0, 9 * 50, 9 * 50);
                    }
                  }

                  p.drawCells = () => {
                    // Dibuja el borde del rectangulo
                    p.fill(255, 255, 255, 255);
                    p.rect(0, 0, 450, 450);
                    // Dibuja las celdas
                    this.range.forEach((row)=> {
                      this.range.forEach((col)=> {
                            p.fill(255, 255, 255, 128);
                          if (row % 3 === 0 && col % 3 === 0) {
                            p.strokeWeight(3);
                            p.rect(col * 50, row * 50, 150, 150);
                            p.strokeWeight(1);
                          } 
                          // Escoje el color de cada celda
                          if (this.grid.getCell(row, col) === this.game.selectedCell) {
                            p.fill(p.color('#1E88E5'));
                          } else if (this.grid.getCell(row, col).error) {
                            p.fill(255, 77, 77, 255);
                          } else if (this.grid.getCell(row, col).lightError) {
                            p.fill(255, 102, 102, 50);
                          } else {
                             p.fill(255, 255, 255, 128);
                          } 
                          
                          // El texto y estilo de cada celda
                          p.rect(col * 50, row * 50, 50, 50);
                          p.fill(0, 0, 0, 255);
                          if (this.grid.getCell(row, col).visible) {
                            p.textSize(20);
                            if(this.grid.getCell(row, col).fixed)
                            p.textStyle(p.BOLD);
                            else 
                                p.textStyle(p.NORMAL);
                            p.text(this.grid.getCell(row, col).value, col * 50 + 50 / 4, row * 50 + 50 / 1.5);
                          }
                          // Errores deshabilitados
                          this.grid.getCell(row, col).error = false;
                          this.grid.getCell(row, col).lightError = false;
                        });
                    });
                  }

                  p.mousePressed = () => {
                    var x = p.mouseX;
                    var y = p.mouseY;
                    // Con X y Y modifican la celda para que se encuentre seleccionada
                    var cell = this.game.getCellAt(x, y);
                    if (cell !== undefined) {
                      if (cell === this.game.selectedCell) {
                        this.game.setCellValue(cell, ((this.game.selectedCell.number + 1) % 10));
                      } else {
                        this.game.setSelectedCell(cell);
                      }
                    }
                    
                  }

                  p.keyPressed = () =>{
                      // Controla si ingresa o elimina un valor
                      if (p.keyCode === p.UP_ARROW) {
                        this.game.moveSelection(0)
                      } else if (p.keyCode === p.RIGHT_ARROW) {
                        this.game.moveSelection(1);
                      } else if (p.keyCode === p.DOWN_ARROW) {
                        this.game.moveSelection(2);
                      } else if (p.keyCode === p.LEFT_ARROW) {
                        this.game.moveSelection(3);
                      } else if (p.keyCode === 96 || p.keyCode === 48 || p.keyCode === p.BACKSPACE || p.keyCode === p.DELETE) {
                        this.game.setCellValue(this.game.selectedCell, 0);
                      } else if (p.keyCode >= 49 && p.keyCode <= 57) {
                        this.game.setCellValue(this.game.selectedCell, p.keyCode - 48);
                      } else if (p.keyCode >= 97 && p.keyCode <= 105) {
                        this.game.setCellValue(this.game.selectedCell, p.keyCode - 96);
                      }
                  }
                }

                let player = new p5(s);

                
                this.getSavedGrid();
    }

    getSavedGrid() {
      this.saved_grid = this._sudokuService.getSavedGrid();
      if(this.saved_grid != null) {
        for (var row = 0; row < 9; row++) {
          for (var col = 0; col < 9; col++) {
            this.grid.setCell(this.saved_grid.data[row][col].value,row,col);
            this.grid.getCell(row, col).fixed = this.saved_grid.data[row][col].fixed;
            this.game_inserted.grid = this.saved_grid;
          }
        }
        this.grid.createSpaces();
      }
    }

    getGrid() {
      this._route.params.forEach((params: Params) => {
        let id = "59d83b736c7b283f0f8833c2";
        
        this._sudokuService.getGrid(this.token, id).subscribe(
          response => {
            if(!response.grid) {
                this._router.navigate(['/']);
            } else {
              console.log(response.grid);
              this.gridMongo = response.grid;
              for (var row = 0; row < 9; row++) {
                for (var col = 0; col < 9; col++) {
                  this.grid.setCell(this.gridMongo.data[row][col].value,row,col);
                }
              }
              this.grid.createSpaces();
            }
          }, error => {
            var errorMessage = <any>error;
            if(errorMessage != null) {
              var body = JSON.parse(error._body);
              console.log(error);
            }
          }
        );
      });
    }

    insertGame() {
      this._sudokuService.insertGame(this.game_inserted).subscribe(
        response => {
          let game = response.game;
          this.game_inserted = game;
          if(!game) {
            this.alertRegister = 'Error al registrarse';
            setTimeout(function(){ this.alertRegister = false }.bind(this), 3000);
          } else {
            this.alertRegister = 'Registro se ha realizado correctamente';
            this.game_inserted = new Game(this.user,this.grid);
            setTimeout(function(){ this.alertRegister = false }.bind(this), 3000);            
          }
        },
        error => {
          localStorage.setItem('saved_grid', JSON.stringify(this.grid));
          var alertRegister = <any>error;
          if(alertRegister != null) {
            var body = JSON.parse(error._body);
            this.alertRegister = body.message;
            console.log(error);
          }
        }
      );
    }

    getGame() {
      this._route.params.forEach((params: Params) => {
        let id = this.user.name;

        this._sudokuService.getGame(this.token, id).subscribe(
          response => {
            if(!response.game) {
                this._router.navigate(['/']);
            } else {
              this.gridMongo = response.game.grid;
              for (var row = 0; row < 9; row++) {
                for (var col = 0; col < 9; col++) {
                    this.grid.setCell(this.gridMongo.data[row][col].value,row,col);
                }
              }
              this.grid.showSpaces();
            }
          }, error => {
             this.getSavedGrid();
            var errorMessage = <any>error;
            if(errorMessage != null) {
              var body = JSON.parse(error._body);
              console.log(error);
            }
          }
        );
      });
    }
    //a6r1an////////////////////////////////////////////////////////////////////////////
    createGridDifficultyClient(difficulty){
      let generator = new Generator();
      generator.newSudoku();
      let sudoku = generator.dispertion(difficulty);
      let grid = this.grid.matrizToGrid(sudoku);
      this.gridMongo = grid;
      for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            this.grid.setCell(this.gridMongo.data[row][col].value,row,col);
            this.game_inserted.grid = this.grid;
        }
      }
      this.grid.createSpaces();
    }
    //a6r1an////////////////////////////////////////////////////////////////////////////
    getGridDifficulty(difficulty: string) {
      this._route.params.forEach((params: Params) => {
        this._sudokuService.getGridDifficulty(this.token, difficulty).subscribe(
          response => {
            if(!response.grid) {
                this._router.navigate(['/']);
            } else {
              console.log(response.grid);

              this.gridMongo = response.grid;
              for (var row = 0; row < 9; row++) {
                for (var col = 0; col < 9; col++) {
                    this.grid.setCell(this.gridMongo.data[row][col].value,row,col);
                }
              }
              this.grid.createSpaces();
            }
          }, error => {
            //a6r1an////////////////////////////////////////////////////////////////////////////
            this.createGridDifficultyClient(difficulty);
            //a6r1an////////////////////////////////////////////////////////////////////////////
            var errorMessage = <any>error;
            if(errorMessage != null) {
              var body = JSON.parse(error._body);
              console.log(error);
            }
          }
        );
      });
    }
    //a6r1an////////////////////////////////////////////////////////////////////////////
    rSolveClient(){
      let cout = 0;
      let emptySpaces = this.game.grid.emptySpaces();

      let sudoku = this.grid.gridToMatriz(this.game_inserted);

          console.log("solving sudoku problem");
          console.log(sudoku);
          let sudokuSolver = new SudokuSolver(sudoku);

          let start = performance.now();
          sudokuSolver.solve();//solo encuentra una solucion

          let resuelto=()=>{
              if(sudokuSolver.solutions.length!=0){
                //sudokuSolver.findSolutions();//encuentra mas de una solucion
                let end = performance.now();
                let duration = end - start;
                console.log(`solution`);
                console.log(sudokuSolver.solutions[0]);    
                console.log(`time of resolution:\n\t ${duration} ms\n\t ${duration/1000} seg\n\t ${(duration/1000)/60} min`);
                let grid = this.grid.matrizToGrid(sudokuSolver.solutions[0])
                for(let p in emptySpaces){
                  setTimeout(()=>{
                    let [x,y] = emptySpaces[p];
                    this.game.setSelectedCell(this.game.grid.getCell(x,y));
                    this.game.setCellValue(this.game.selectedCell, grid.data[x][y].value);
                  },100*cout++);
                }

              }else
                setTimeout(()=>{resuelto()},1000);
          }
          
          setTimeout(()=>{resuelto()},1000);
    }  
    //a6r1an////////////////////////////////////////////////////////////////////////////
    //a6r1an////////////////////////////////////////////////////////////////////////////
    rSolve(){
      let cout = 0;
      let emptySpaces = this.game.grid.emptySpaces();

      this._sudokuService.rSolveGame(this.game_inserted).subscribe(
        response => {
          if(!response.grid) {
            this._router.navigate(['/']);
          } else {
            console.log(response.grid);
            this.gridMongo = response.grid;
  
            for(let p in emptySpaces){
              setTimeout(()=>{
                let [x,y] = emptySpaces[p];
                this.game.setSelectedCell(this.game.grid.getCell(x,y));
                this.game.setCellValue(this.game.selectedCell, this.gridMongo.data[x][y].value);
              },100*cout++);
            }
  
          }
        }, error => {
          this.rSolveClient()
          var errorMessage = <any>error;
          if(errorMessage != null) {
            var body = JSON.parse(error._body);
            console.log(error);
          }

          
        }
        );
    }
    //a6r1an////////////////////////////////////////////////////////////////////////////
}