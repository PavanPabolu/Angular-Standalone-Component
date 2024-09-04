import { Component } from '@angular/core';
import { ChangeColorDirective } from '../../directives/change-color.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChangeColorDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
