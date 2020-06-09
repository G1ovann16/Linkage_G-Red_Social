import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //#region POST register login password
  setNewRegister(body: any){
    console.log(body);
    return this.http.post<any>(environment.API_URL + '/users/register', body);
  }
  setNewLogin(body: any){
  return this.http.post<any>(environment.API_URL + '/users/login', body);
  }

  Logout(id): Observable<any>{
  return this.http.get<any>(environment.API_URL + `/users/logout/${id}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('authToken')
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



//#endregion

  getName(){
    return localStorage.getItem('nameUser');
    }

}
