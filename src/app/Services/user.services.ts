import { EventEmitter } from "@angular/core"

export class UserService {

    users = [ 
        { name: 'John Doe', job: 'Software Developer', gender: 'Male', country: 'USA', age: 30, avatar: 'assets/1.png'},
        { name: 'Jane Smith', job: 'Product Manager', gender: 'Female', country: 'Canada', age: 28, avatar: '/assets/2.png'},
        { name: 'Bob Johnson', job: 'Data Scientist', gender: 'Male', country: 'UK', age: 35, avatar: 'assets/3.png' },
        { name: 'Alice Brown', job: 'Graphic Designer', gender: 'Female', country: 'Australia', age: 25, avatar: 'assets/4.png' },
        { name: 'Charlie Williams', job: 'Marketing Specialist', gender: 'Male', country: 'Germany', age: 32, avatar: 'assets/5.png' },
       ]

       OnShowUserDetails = new EventEmitter <{name: string,   job: string,   gender: string,   country: string,   age: number,   avatar: string}> ();

       showUserDetails(user: {name: string,   job: string,   gender: string,   country: string,   age: number,   avatar: string}){
        this.OnShowUserDetails.emit(user);
       }
}