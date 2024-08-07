import { Routes } from '@angular/router';
import { LoginTemplateFormComponent } from './login-template-form/login-template-form.component';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UniversitiesComponent } from './universities/universities.component';
UniversitiesComponent
FeedbackComponent
export const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'login',
    title: 'Login Page',
    component: LoginTemplateFormComponent,
  },
  {
    path: 'register',
    title: 'Register Page',
    component: RegisterReactiveFormComponent ,
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'feedback',
    title: 'Feedback',
    component: FeedbackComponent,
  },
  {
    path: 'universities',
    title: 'Search Universities',
    component: UniversitiesComponent,
  },
];

export class AppModule { }