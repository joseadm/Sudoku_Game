import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'user-edit',
    templateUrl: '../views/user-edit.html',
    providers: [UserService]
})

export class UserEditComponent implements OnInit {
    public titulo: string;
    public user: User;
    public identity;
    public token;
    public alertUpdate;
    public url: string;

    constructor(
        private _userService: UserService
    ) {
        this.titulo = 'Actualizar mis datos';

        // LocalStorage
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log('user-edit.component.ts cargando...');
    }

    onSubmit() {
        console.log(this.user);
        this._userService.updateUser(this.user)
            .subscribe(
            response => {
                if(!this.identity._id) {
                    this.alertUpdate = 'El usuario no se ha actualizado';
                  } else {
                    // this.user = response.user;
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    document.getElementById("identity_name").innerHTML = this.user.name;
                    this.alertUpdate = 'Datos actualizados correctamente';
                }
            },
            error => {
                var alertUpdate = <any>error;
                
                        if(alertUpdate != null) {
                          var body = JSON.parse(error._body);
                          this.alertUpdate = body.message;
                          console.log(error);
                        }
            }
        );
    }
}