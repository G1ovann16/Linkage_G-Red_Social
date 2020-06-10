import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
// import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router,
    private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {
  }
  register(registerform: NgForm) {
    if (registerform.controls.password.errors?.pattern) {
      return this.notification.warning('Wrong password', 'Your password must contain at least a lowercase letter, a uppercase letter, a number, and must be between 8 and 20 characters');
    }
    if (!registerform.valid) {
      return this.notification.warning('Empty field', 'completa todo anda`');
    }

    localStorage.setItem('nameUser', registerform.value.name);
    this.userService.setNewRegister(registerform.value)
      .subscribe(() => {
        this.notification.success('User created', 'User successfully created', { nzDuration: 4000 });
        setTimeout(() => this.router.navigate(['/login']), 1000);
        },
        (error: HttpErrorResponse) => {
          this.notification.error('Successfully Login', error.error['messaje']);
        });

  }
}
