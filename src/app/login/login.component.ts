import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Users } from '../models/users';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert:boolean = false
    email: string;
    password: string;
    public users: Users[] = [];


  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getUsers().subscribe((res: Users[])=>{
      this.users = res/* .filter((r)=>
        r.id === 2
      ); */
    })
  }

  logIn(){
    let userExist: boolean;
    let index: number;
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].email === this.email && this.users[i].password === this.password){
        userExist = true;
        index = i;
        break;
      }
    }
    /* Set object to loaclStorage */
    if(userExist){
      localStorage.setItem('user', JSON.stringify(this.users[index]));
    }



    /* Get object from localStorage */
    /* let local = localStorage.getItem('user');
    let covertedLocal = JSON.parse(local);
    console.log(covertedLocal); */
  }
}
