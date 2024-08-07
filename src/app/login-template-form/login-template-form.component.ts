import { Component, OnInit } from '@angular/core';

import { LoginUser } from '../loginuser';
import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDirectivesModule } from '../share-directives.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-template-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,SharedDirectivesModule ],
  templateUrl: './login-template-form.component.html',
  styleUrl: './login-template-form.component.css'
})

export class LoginTemplateFormComponent implements OnInit{
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }
  //skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];

  //loginUser = new LoginUser('', '', 'Singing');
  loginUser = new LoginUser('', '');
  onSubmit() {
    this.router.navigate(['/home']);
  }
}
