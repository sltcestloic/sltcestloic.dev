import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { bootstrapTwitterX } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';
import { SquirrelComponent } from '../../components/squirrel/squirrel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterModule, SquirrelComponent, NgIconComponent],
    providers: [provideIcons({ octMarkGithub, bootstrapTwitterX})],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
