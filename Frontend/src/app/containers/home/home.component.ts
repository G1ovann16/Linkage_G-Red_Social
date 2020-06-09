import { Component, OnInit } from '@angular/core';
// import Post from 'src/app/model/post.model';
import {UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { from } from 'rxjs';
import * as moment from 'moment';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p = 1;

  allPost = [];
user = [];
editText: string;
postComment: string;
comentList = [];
bodyLike = {
  likeable_id: 1,
  post_id: ''
};
bodyComment = {
  user_id: 0,
  post_id: 0,
  description: ''
};

usuario = {
name: '',
description: '',
avatar: 'agiore@gmail.com'
};
data = [];
  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllPosts();
    // localStorage.setItem('authToken', res['user']['token']);
    // localStorage.setItem('User', res['user']['id']);
    // localStorage.setItem('nameUser', res['user']['name']);
  }
  getAllPosts(){
    this.postService.getAllPost()
    .subscribe(
      Posts => {
        console.log(Posts);
        this.allPost = Posts;
        for (let i = 0; i < this.allPost.length; i++) {
          this.comentList[i] = this.allPost[i].comments;
          this.data[i] = moment(this.allPost[i].created_at).fromNow();
        }
        console.log(this.allPost, this.comentList, this.data);
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
// tslint:disable-next-line: variable-name
addClick(post_id: string){
  this.bodyLike.post_id = post_id;
    // tslint:disable-next-line: radix
  this.postService.addLikePost(this.bodyLike, post_id)
        .subscribe(res => {
          console.log(res);
          this.getAllPosts();
        });
}
addClickComment(post_id: string){
  this.bodyLike.post_id = post_id;
    // tslint:disable-next-line: radix
  this.postService.addLikeComment(this.bodyLike, post_id)
        .subscribe(res => {
          console.log(res);
          this.getAllPosts();
        });
}

      deletePost(){
        this.postService.deletePost(3)
        .subscribe(
          user => {
            console.log(user);
            this.getAllPosts();
        },
         err => console.log(err)
        );
      }
      addPost(postForm, imageInput){
        const postFormData = new FormData();
        if (postForm.value.name) {  postFormData.set('name', postForm.value.name); }
        if (postForm.value.description) {  postFormData.set('description', postForm.value.description); }
        if (imageInput.files[0]) {  postFormData.set('image', imageInput.files[0]); }
        this.postService.addPost(postFormData)
      .subscribe(
        user => {
          console.log(user);
          // postFormData.set('name', '');
          // postFormData.set('description', '');
          // postFormData.set('image', '');
          console.log(postFormData.get('name'));
          this.getAllPosts();
      },
       err => console.log(err)
      );
      }

      createComment(e, post_id) {
        if (e.key === 'Enter') {
          // tslint:disable-next-line: radix
          this.bodyComment.user_id = parseInt(localStorage.getItem('User'));
          this.bodyComment.post_id = post_id;
          this.bodyComment.description = this.postComment;
          this.postComment = '';
          this.postService.addComment(this.bodyComment)
            .subscribe(res => {
              console.log(res);
              this.getAllPosts();
            });
        }
      }

}
