import { Component } from '@angular/core';
import { UserService } from './Services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent  {
  title = 'Show-Details';
  constructor(private userService: UserService){  }

}
