import { Component, OnInit } from '@angular/core';
// import Post from 'src/app/model/post.model';
import {UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
allPost = [];
user = [];
comentList = [];
usuario = {
name: '',
description: '',
avatar: 'agiore@gmail.com'
};
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllPosts();
  }
  getAllPosts(){
    this.userService.getAllPost()
    .subscribe(
      Posts => {
        this.allPost = Posts;
        for (let i = 0; i < this.allPost.length; i++) {
          this.comentList[i] = this.allPost[i].comments;
        }
        console.log(this.allPost, this.comentList);

    },
     err => console.log(err)
    );
    }
actualUser(id, index){
  localStorage.setItem('userActual', id);
  if (localStorage.getItem('User') === localStorage.getItem('userActual')){
  setTimeout(() => this.router.navigate(['profile']), 1000);
}else{
  setTimeout(() => this.router.navigate([`user/${this.allPost[index].user.name}`]), 1000);
}

}
    getUserById(){
      this.userService.getUserById(3)
      .subscribe(
        user => {
          console.log(user);
      },
       err => console.log(err)
      );
      }

      deletePost(){
        this.userService.deletePost(3)
        .subscribe(
          user => {
            console.log(user);
            this.getAllPosts();
        },
         err => console.log(err)
        );
      }

}
