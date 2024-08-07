import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  standalone: true,
  imports: [],
  templateUrl: './headercomponent.component.html',
  styleUrl: './headercomponent.component.css'
})
export class HeadercomponentComponent {
  @Input() title: string = '';
  @Input() total: number = 0; 
}
