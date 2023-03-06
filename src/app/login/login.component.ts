import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    usersData = {
        email: '',
        password: ''
    }

    constructor() {

    }

    checkLogin() {
        if(this.usersData.email == 'mean.bordin@gmail.com' && this.usersData.password == '1234') {
            
        }
    }
}
