import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  editProfile(){
    this.userService.editProfile('body')
    .subscribe(() => {
        // this.userService.setActive(true);
        setTimeout(() => this.router.navigate(['/profile']), 2000);
      },
      (error: HttpErrorResponse) => {
      });

}
  
}
