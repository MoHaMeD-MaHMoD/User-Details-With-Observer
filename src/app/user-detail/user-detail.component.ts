import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.services';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService){}

  user!: { name: string; job: string; gender: string; country: string; age: number; avatar: string; } ;
  
  ngOnInit(){
    this.userService.OnShowUserDetails.subscribe((data:{name: string; job: string; gender: string; country: string; age: number; avatar: string; }) =>{
        this.user=data;
    })
  }
}
