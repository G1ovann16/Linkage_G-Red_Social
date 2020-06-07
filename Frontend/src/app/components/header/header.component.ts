import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'Linkage G';
  public User = {};

  constructor(
              public usersService: UserService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.usersService.getUserById(localStorage.getItem('User'))
    .subscribe(
      user => {
        this.User = user;
        console.log(this.User);
    },
     err => console.log(err)
    );
  }
  logout(){
    const token = localStorage.getItem('authToken');
    this.usersService.Logout(token)
    .subscribe((res: any) => {
      // this.notification.success('Successfully Logout', res['message']);
      localStorage.removeItem('authToken');
      // this.usersService.setUser(null);
      console.log('deslogeado correct');
      setTimeout(() => this.router.navigate(['/']), 2000);
    },
    (error: HttpErrorResponse) => {
      console.error(error);
      // this.notification.error('Wrong Logout', 'There was a problem trying to log in');
    });
  }
}

