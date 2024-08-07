import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule,FormGroup,Validators} from '@angular/forms';
import { confirmPasswordValidator } from '../passwordvalidator';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register-reactive-form.component.html',
  styleUrl: './register-reactive-form.component.css'
})
export class RegisterReactiveFormComponent implements OnInit{
  //name = new FormControl('');
  profileForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,Validators.minLength(5)
    ])
  },{ validators: confirmPasswordValidator });

  constructor(private router: Router) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit() {
        console.log("form status--",this.profileForm.status)
        if (this.profileForm.valid)
        {
          //store data in database
          const email = this.profileForm.get('email')?.value;
          const password = this.profileForm.get('password')?.value;
          console.log(email);
          console.log(password);

          this.router.navigate(['/login']);
        }
        else
        {
          this.profileForm.markAllAsTouched();
        }
  }  

}
