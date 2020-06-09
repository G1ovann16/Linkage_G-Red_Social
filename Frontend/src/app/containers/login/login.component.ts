import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  loginIn(userform: NgForm) {
    // if (!userform.valid){
    //     return this.notification.warning('Empty field', 'completa todo anda`');
    //   }
    {
      console.log(userform.value);
      this.userService.setNewLogin(userform.value)
        .subscribe((res: HttpResponse<object>) => {
          localStorage.setItem('authToken', res['user']['token']);
          localStorage.setItem('User', res['user']['id']);
          localStorage.setItem('nameUser', res['user']['name']);
          setTimeout(() => this.router.navigate(['/home']), 2000);
        },
          (error: HttpErrorResponse) => {
            console.error(error);
            console.log('Wrong Login', 'There was a problem trying to log in');
          });
    }
  }
}
