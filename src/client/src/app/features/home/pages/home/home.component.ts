import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteHeaderComponent } from '../../../../shared/ui/site-header/site-header.component';
import { SquirrelComponent } from '../../../../shared/ui/squirrel/squirrel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterModule, SquirrelComponent, SiteHeaderComponent],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.scss'
})
export class HomeComponent {
}
