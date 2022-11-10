import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  selectedUser: IUser;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }


  getUser(user: IUser):void {
    this.selectedUser = user
  }
}
