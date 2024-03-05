import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
