import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  //#region  Posts
getAllPost(){
  return this.http.get<any>(environment.API_URL + '/posts/getAll');
}
getPostByUser(id){
  return this.http.get<any>(environment.API_URL + `/users/getPostsById/${id}`);
}

addPost(postFormData: any){
  console.log(postFormData);
  return this.http.post<any>(environment.API_URL + '/posts/addNew', postFormData,
  {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken')
    }
  });
}

editPost(body: any, id){
  console.log(body);
  return this.http.put<any>(environment.API_URL + `/posts/update/${id}`, body, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken')
    }
  });
}
deletePost(id){
  return this.http.delete<any>(environment.API_URL + `/posts/delete/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken')
    }
  });
}

editProfile(body: any, id){
  console.log(body, id, localStorage.getItem('authToken'));
  return this.http.put<any>(environment.API_URL + `/users/update/${id}`, body, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken')
    }
  });
}
editImageProfile(image: FormData){
  return this.http.post<any>(environment.API_URL + `/users/updateProfile/`, image, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken')
    }
  });
}

addLikePost(body, post_id){
      console.log(body, post_id, localStorage.getItem('authToken'));
      return this.http.post<any>(environment.API_URL + `/posts/addLike/${post_id}`, body,
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken')
      }
    });

}
addLikeComment(body, post_id){
  console.log(body, post_id, localStorage.getItem('authToken'));
  return this.http.post<any>(environment.API_URL + `/posts/addComment/${post_id}`, body,
{
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('authToken')
  }
});

}
addComment(body){
  console.log(body);
  return this.http.post<any>(environment.API_URL + `/addComment`, body,
{
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('authToken')
  }
});
}
}
