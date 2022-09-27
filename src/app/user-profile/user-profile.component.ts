import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {User} from './User'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})



export class UserProfileComponent implements OnInit {

  constructor() { 

  }

  public user : User = new User("Doe", "John", 25, "",
   "https://randomuser.me/api/portraits/lego/2.jpg") ;

  
  ngOnInit(): void {
    
  }

  showAge():void{
    const btn = document.getElementById("btnShowAge");
    const elt = document.getElementById("age");
    if (elt && elt.style.display != 'none')
    {
      elt.style.display = 'none';
      if (btn) btn.innerHTML = "Show age"
    } else if (elt){
      elt.style.display = 'block';
      if (btn) btn.innerHTML = "Hide age"
    }
    
  }

}
