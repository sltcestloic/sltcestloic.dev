import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SquirrelComponent } from '../../components/squirrel/squirrel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterModule, SquirrelComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
