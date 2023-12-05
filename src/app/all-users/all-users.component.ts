import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.services';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css',

})
export class AllUsersComponent implements OnInit{
[x: string]: any;

  constructor(private userService: UserService){  }

  users: {name: string,   job: string,   gender: string,   country: string,   age: number,   avatar: string}[] = [];

  ngOnInit(): void {
    this.users= this.userService.users    
  }

  showDetail(user: {name: string,   job: string,   gender: string,   country: string,   age: number,   avatar: string}){
    this.userService.showUserDetails(user);
  }

}
