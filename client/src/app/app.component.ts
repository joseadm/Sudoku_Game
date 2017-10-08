import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { SudokuService } from './services/sudoku.service';
import { User } from './models/user';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers :[UserService, SudokuService],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'Sudoku';
  public user: User;
  public user_register: User;
  public identity;
  public token;
  public errorMessage;
  public alertRegister;
  public url;

  constructor(
    private _userService: UserService,
    private _sudokuService: SudokuService
  ) {
    this.url = GLOBAL.url;
    this.user = new User('','','','');
    this.user_register = new User('','','','');
  }

  ngOnInit() {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
    }

  public onSubmit() {
    console.log(this.user);
    this._userService.signup(this.user).subscribe(
      response => {
        let identity = response.user;
        this.identity = identity;

        if(!this.identity._id) {
          alert("El usuario no esta correctamente identificado");
        } else {
        localStorage.setItem('identity', JSON.stringify(identity));
          this._userService.signup(this.user, true).subscribe(
            response => {
              let token = response.token;
              this.token = token;
      
              if(this.token.length <= 0) {
                alert("El token no se ha generado correctamente");
              } else {

                localStorage.setItem('token', token);
                this.user = new User('','','','');
              }
            },
            error => {
              var errorMessage = <any>error;
              if(errorMessage != null) {
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;
              }
            }
          );
        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null) {
          var body = JSON.parse(error._body);
          this.errorMessage = body.message;
          console.log(error);
        }
      }
    );
  }

  logout() {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    this.identity = null;
    this.token = null;
  }

  onSubmitRegister() {
    console.log(this.user_register);
    this._userService.register(this.user_register).subscribe(
      response => {

        let user = response.user;
        this.user_register = user;

        // Insertar los grids cada vez que se registra un usuario
        this._sudokuService.insertGrids().subscribe(
          response => {
          },
          error => {
              console.log(error);
            }
        );

        if(!user._id) {
          this.alertRegister = 'Error al registrarse';
          setTimeout(function(){ this.alertRegister = false }.bind(this), 3000);
        } else {
          this.alertRegister = 'Registro se ha realizado correctamente';
          this.user_register = new User('','','','');
          setTimeout(function(){ this.alertRegister = false }.bind(this), 3000);
        }
      },
      error => {
        var alertRegister = <any>error;
        if(alertRegister != null) {
          var body = JSON.parse(error._body);
          this.alertRegister = body.message;
          console.log(error);
        }
      }
    );
  }

}
