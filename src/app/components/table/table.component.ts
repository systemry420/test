import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private service: DataService
  ) {
    this.users$ = new Observable<User[]>()
   }

  ngOnInit(): void {
    this.users$ = this.service.getData()
  }

}
