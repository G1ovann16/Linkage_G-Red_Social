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
    this.usersService.Logout(localStorage.getItem('User'))
    .subscribe((res: any) => {
      // this.notification.success('Successfully Logout', res['message']);
      localStorage.removeItem('authToken');
      localStorage.removeItem('User');
      // this.usersService.setUser(null);
      console.log('deslogeado correct');
      this.usersService.setActive(false);
      setTimeout(() => this.router.navigate(['/']), 2000);
    },
    (error: HttpErrorResponse) => {
      console.error(error);
      // this.notification.error('Wrong Logout', 'There was a problem trying to log in');
    });
  }
}

