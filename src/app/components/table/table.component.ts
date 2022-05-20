import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, map, tap, BehaviorSubject, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import * as _ from 'underscore'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: User[] = []
  subscription: Subscription


  constructor(
    private service: DataService
  ) {
    this.subscription = this.service.getData()
      .subscribe(users => {
        this.users = users
      })
   }

  ngOnInit(): void {
  }

  sort(key: string) {
    this.users = _.sortBy(this.users, key)
  }

  ngDestroy() {
    this.subscription.unsubscribe()
  }

}
