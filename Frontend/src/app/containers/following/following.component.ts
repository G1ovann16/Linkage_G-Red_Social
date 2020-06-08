import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  text: string;
  Post = {
    name: '',
    image: '',
    user_id: 0
  };
  usuario: {};
  clave: '';
  key = 0;
  allPersonalPost = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('User'));
    // tslint:disable-next-line: radix
    this.Post.user_id = parseInt(localStorage.getItem('User'));
    this.getAllPosts();
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
        this.getAllPosts();
    },
     err => console.log(err)
    );
  }

  editPost(){
    this.Post.name = this.text;
    this.Post.image = 'https://www.axonize.com/wp-content/uploads/2019/03/AxonizeBlog_SinglePost_815x600_FacilityintoSmartBuilding.jpg';
    console.log(this.Post);
    this.userService.editPost(this.Post, 3)
    .subscribe(
      user => {
        console.log(user);
        this.getAllPosts();
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
  getAllPosts(){
    this.userService.getPostByUser(localStorage.getItem('userActual'))
    .subscribe(
      Posts => {
        this.allPersonalPost = Posts.posts;
        console.log(this.allPersonalPost);

    },
     err => console.log(err)
    );
    }

}

