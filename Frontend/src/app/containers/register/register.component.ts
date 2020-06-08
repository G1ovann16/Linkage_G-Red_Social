import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
// import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router,
    // private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {
  }
  register(registerform: NgForm) {

    {
      console.log(registerform.value);
      this.userService.setNewRegister(registerform.value)
      .subscribe(() => {
          // this.userService.setActive(true);
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        (error: HttpErrorResponse) => {
        });

  }

  }
}
