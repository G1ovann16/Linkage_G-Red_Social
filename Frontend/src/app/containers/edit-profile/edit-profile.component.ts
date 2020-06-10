import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  allPersonalPost = [];
  constructor(
    public userService: UserService,
    public postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  editProfile(body){
    // tslint:disable-next-line: radix
    this.postService.editProfile(body.value, parseInt(localStorage.getItem('User')))
      .subscribe(res => {
        console.log(res);
        localStorage.setItem('nameUser', res['User']['name']);
        this.getUser();
      });
    body.reset();
}
getUser(){
  this.userService.getUserById(localStorage.getItem('User'))
  .subscribe(
    Posts => {
      this.allPersonalPost = Posts;

      console.log(Posts);

  },
   err => console.log(err)
  );
}
  editImage(imageInput){
    const imageFormData = new FormData();
    if (imageInput.files[0]) {  imageFormData.set('img', imageInput.files[0]); }
  // tslint:disable-next-line: radix
    this.postService.editImageProfile(imageFormData)
    .subscribe(res => {
      this.getUser();
    });
}


}
