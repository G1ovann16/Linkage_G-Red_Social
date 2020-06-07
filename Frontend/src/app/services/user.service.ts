import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserService {
public email = {};
public idUserActual = 0;

  constructor(private http: HttpClient) { }

  //#region POST register login password
  setNewRegister(body: any){
    console.log('body');
    return this.http.post<any>(environment.API_URL + '/users/register', body);
  }
  setNewLogin(body: any){
  return this.http.post<any>(environment.API_URL + '/users/login', body);
}

Logout(token): Observable<any>{
  return this.http.get<any>(environment.API_URL + '/users/logout', {
    headers: {
      Authorization: token
    }
  });
}

resetPassword(password, recoverToken) {
  return this.http.post(environment.API_URL + '/users/resetPassword', {recoverToken, password });

}

getUserById(id){
  return this.http.get<any>(environment.API_URL + `/users/userById/${id}`);
}
//#endregion
getAllUserPost(){
  return this.http.get<any>(environment.API_URL + '/users/getAllPostes');
}
getPostsById(id){
  console.log(id);
  return this.http.get<any>(environment.API_URL + `/users/getPostsById/${id}`);
}
getPostsByMail(mail){
  return this.http.get<any>(environment.API_URL + `/users/mail${mail}`);
}

//#region  Posts
getAllPost(){
  return this.http.get<any>(environment.API_URL + '/posts/getAll');
}
getPostByUser(id){
  return this.http.get<any>(environment.API_URL + `/users/getPostsById/${id}`);
}

addPost(body: any){
  console.log(body);
  return this.http.post<any>(environment.API_URL + '/posts/addNew', body);
}
//     headers: {
//       Authorization: 'Bearer' + token
//     }
//   });
// }

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

//#endregion
  getId(){
  return this.idUserActual;
  }
  setId(Id){
  this.idUserActual = Id;
  }

}
