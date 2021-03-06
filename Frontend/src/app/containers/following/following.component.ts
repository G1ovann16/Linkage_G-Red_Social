import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PostService } from 'src/app/services/post.service';
import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  Post = {
    name: '',
    image: '',
    user_id: ''
  };
  postComment = '';
  bodyLike = {
    likeable_id: 1,
    post_id: ''
  };
  bodyComment = {
    user_id: 0,
    post_id: 0,
    description: ''
  };
  data = [];
  bodyFollower = {
  followed_id: localStorage.getItem('User'),
  follower_id: localStorage.getItem('userActual')
  };
  text: string;
  editText: string;
  allPersonalPost = [];
    constructor(
      public userService: UserService,
      public postService: PostService,
      private router: Router,
      private notification: NzNotificationService
      ) { }
  
    ngOnInit(): void {
      console.log(localStorage.getItem('User'));
      // tslint:disable-next-line: radix
      // this.getAllPosts();
      this.getUser();
    }
      getUser(){
        this.userService.getUserById(localStorage.getItem('userActual'))
        .subscribe(
          Posts => {
            this.allPersonalPost = Posts;
            for (let i = 0; i < Posts.user.post.length; i++) {
              console.log(Posts.user.post[i]?.created_at);
              this.data[i] = moment(Posts.user.post[i]?.created_at).fromNow();
            }
            console.log(Posts);
        },
         err => console.log(err)
        );
      }

      addClick(post_id: string){
        this.bodyLike.post_id = post_id;
          // tslint:disable-next-line: radix
        this.postService.addLikePost(this.bodyLike, post_id)
              .subscribe(res => {
                console.log(res);
                this.getUser();
              });
      }
      addFriends(){
        this.userService.addFriends(this.bodyFollower)
              .subscribe(res => {
                console.log(res);
                this.notification.success('ohhhh', 'one friend more', { nzDuration: 4000 });
                this.getUser();
              });
      }
      addClickComment(post_id: string){
        this.bodyLike.post_id = post_id;
          // tslint:disable-next-line: radix
        this.postService.addLikeComment(this.bodyLike, post_id)
              .subscribe(res => {
                console.log(res);
                this.getUser();
              });
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
              this.getUser();
            });
        }
      }

      link(name, id){
        localStorage.setItem('userActual', id);
        if (localStorage.getItem('User') === localStorage.getItem('userActual')){
        setTimeout(() => this.router.navigate(['profile']), 1000);
      }else{
        setTimeout(() => this.router.navigate([`user/${name}`]), 1000); 
        }
      }

}
