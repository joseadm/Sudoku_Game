import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'sudoku',
    templateUrl: '../views/sudoku.html',
    providers: [UserService]
})

export class SudokuComponent implements OnInit {
    public titulo: string;
    public identity;
    public token;
    public url: string;
    public init;

    public grid

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.titulo = 'Jugar Sudoku'
    }

    ngOnInit() {
        console.log('sudoku.compose.ts cargando...');
        
    }

}