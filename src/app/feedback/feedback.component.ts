import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NavigationComponent,ReactiveFormsModule,CommonModule ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    satisfaction: new FormControl('', [Validators.required]),
    improveSuggestion: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required])
  });

  currentRating: number = 0;
  submissionMessage: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialization logic if any
  }

  setRating(star: number) {
    this.currentRating = star;
    this.profileForm.get('rating')?.setValue(star.toString());
  }

  onSubmit() {
    console.log("form status--", this.profileForm.status);
    if (this.profileForm.valid) {
      this.submissionMessage = 'Feedback submitted successfully!';
      this.profileForm.reset();
      this.currentRating = 0;
      setTimeout(() => {
        this.submissionMessage = '';
      }, 3000); // Hide message after 3 seconds
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  closeMessage() {
    this.submissionMessage = '';
  }
}
