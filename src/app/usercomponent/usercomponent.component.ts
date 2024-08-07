import { Component } from '@angular/core';

@Component({
  selector: 'app-usercomponent',
  standalone: true,
  imports: [],
  templateUrl: './usercomponent.component.html',
  styleUrl: './usercomponent.component.css'
})
export class UsercomponentComponent {
  isLoggedIn = false;
  login(){
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false;
  }

  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];

  cars = 

[ {

   id: 1,

  make: 'Audi',

  model: 'A4',

   color: 'green'

 },

 {

   id: 2,

   make: 'Honda',

   model: 'Accord',

   color: 'purple'

 },

 {

   id: 3,

   make: 'Ford',

   model: 'Bronco',

   color: 'red'

 }

];

}
