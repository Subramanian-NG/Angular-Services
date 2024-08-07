import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { TaskListComponent } from './task-list/task-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterReactiveFormComponent } from "./register-reactive-form/register-reactive-form.component";
import { LoginTemplateFormComponent } from './login-template-form/login-template-form.component';
import { IndexComponent } from './index/index.component';
import { HeroService } from './heroes/hero.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsercomponentComponent, HeadercomponentComponent, FootercomponentComponent, TaskListComponent, ReactiveFormsModule, RegisterReactiveFormComponent, LoginTemplateFormComponent,IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private heroService: HeroService)
  {

  }

  title = 'my-first-project';
  imageUrl: string = 'favicon.ico';

  ngOnInit(): void {
    console.log(this.heroService.getHeroes());
  }
  
  onClick() {
    //console.log("button clicked");
    alert('button clicked')
  }

}
