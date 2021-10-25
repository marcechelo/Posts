import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getGnewsPosts(country:string):Observable<any>{

    let response = new Subject<any>();
    this.http.get<any>('https://gnews.io/api/v4/search?q=watches&max=100&country='+country+'&token=fe118d59790f4042fbb203e9c29acf60')
    .subscribe(posts =>{
      let aux: Object[] = posts['articles']
      response.next(aux);
    });
    return response.asObservable();
  }

  getPlusPosts():Observable<any>{
    let response = new Subject<any>();
    this.http.get<any>('https://posts-code.herokuapp.com/api/posts')
    .subscribe(posts =>{
      let aux: Object[] = posts;
      response.next(aux);
    });
    return response.asObservable();
  }
}
