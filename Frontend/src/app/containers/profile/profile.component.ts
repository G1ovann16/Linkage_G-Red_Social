import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


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
text: string;
editText: string;
allPersonalPost = [];
  constructor(
    public userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('User'));
    // tslint:disable-next-line: radix
    // this.getAllPosts();
    this.getUser();
  }
  addPost(){
    this.Post.name = this.text;
    this.Post.image = 'https://www.axonize.com/wp-content/uploads/2019/03/AxonizeBlog_SinglePost_815x600_FacilityintoSmartBuilding.jpg';
    console.log(this.Post);
    const token = localStorage.getItem('authToken');
    this.userService.addPost(this.Post)
    .subscribe(
      user => {
        console.log(user);
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
    this.userService.editPost(this.Post, 3)
    .subscribe(
      user => {
        console.log(user);
        this.getUser();
    },
     err => console.log(err)
    );
  }
  deletePost(){
    this.userService.deletePost(3)
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
          console.log(Posts);

      },
       err => console.log(err)
      );
    }
}
