import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = '/api/auth';
  constructor(private http: HttpClient,
    private router: Router) { }
  public login(username: string, password: string) {
    /* console.log('in userservice',`${this.userUrl}/login`) */
    return this.http.post(`${this.userUrl}`, {
      'username': username,
      'password': password
    });
  }
  public register(username: string, password: string, tel: string) {
    return this.http.post('/api/auth/register', {
      'username': username,
      'password': password,
      'tel': tel,
      'role': 'user'
    })
  }
  /*  public geta(name:string){
  return this.http.post('api/auth/searchtrue',{
    'name':name
  })
   } */
  public search(input: string) {
    return this.http.post('/api/auth/search', {
      'input': input
    })
  }
  HotHighchart(): Observable<any> {
    return this.http.get<any>('/api/auth/hcharts');
  }
  PriceHighchart(): Observable<any> {
    return this.http.get<any>('/api/auth/hcharts1');
  }
  CommentHighchart(): Observable<any> {
    return this.http.get<any>('/api/auth/hcharts2');
  }
  public getallinfo(searchthing: string) {
    return this.http.post('api/auth/searchtrue', {
      'searchthing': searchthing,
    })
  }
  /* }
  uploadFile( file: File): Observable<HttpEvent<any>> {
 
   let formData = new FormData();
   formData.append('upload', file);
 
   let params = new HttpParams();
 console.log(file)
   const options = {
     params: params,
     reportProgress: true,
   
   };
 
   const req = new HttpRequest('POST', '/api/auth/upload', formData, options);
   return this.http.request(req);
 } */

}
