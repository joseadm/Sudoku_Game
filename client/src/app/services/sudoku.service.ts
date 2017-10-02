import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Grid } from '../models/grid';

@Injectable()
export class SudokuService {
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    getGrid(token, id: string) {
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization':token
        });
        let options = new RequestOptions({headers:headers});
        return this._http.get(this.url+'sudoku/get-grid/'+id, options)
                         .map(res => res.json());
    }

    insertGame(game_insert) {
        let params = JSON.stringify(game_insert);
        
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'sudoku/insert-game', params, {headers: headers})
            .map(res => res.json());
    }

    getGame(token, id: string) {
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization':token
        });
        let options = new RequestOptions({headers:headers});
        return this._http.get(this.url+'sudoku/get-game/'+id, options)
                         .map(res => res.json());
    }

}