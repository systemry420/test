import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res: any) => {
          return res.map((user: any) => (
            new User(user.id, user.name, user.phone, user.email, user.username)
          ))
        })
      )
  }
}
