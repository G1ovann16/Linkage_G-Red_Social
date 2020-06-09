import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PostService } from 'src/app/services/post.service';
import { Alert } from 'antd';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
profile = {
  tag: '',
  bio: '',
  name: '',
  city: '',
  avatar: '',
  lastName: ''
};
text: string;
editText: string;
allPersonalPost = [];
  constructor(
    public userService: UserService,
    public postService: PostService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('User'));
    // tslint:disable-next-line: radix
    // this.getAllPosts();
    this.getUser();
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
      postFormData.set('name', '');
      postFormData.set('description', '');
      postFormData.set('image', '');
      console.log(postFormData.get('name'));
      this.getUser();
  },
   err => console.log(err)
  );
  }
  editPost(index){
    this.Post.name = this.editText;
    this.Post.image = 'https://www.axonize.com/wp-content/uploads/2019/03/AxonizeBlog_SinglePost_815x600_FacilityintoSmartBuilding.jpg';
    this.Post.user_id = localStorage.getItem('User');
    console.log(this.Post);
    this.postService.editPost(this.Post, 3)
    .subscribe(
      user => {
        console.log(user);
        this.getUser();
    },
     err => console.log(err)
    );
  }
  deletePost(){
    this.postService.deletePost(3)
    .subscribe(
      user => {
        console.log(user);
        this.getUser();
    },
     err => console.log(err)
    );
  }
    getUser(){
      this.userService.getUserById(localStorage.getItem('User'))
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


}
