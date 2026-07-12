import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { bootstrapTwitterX } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';

@Component({
    selector: 'site-header',
    standalone: true,
    imports: [RouterLink, NgIconComponent],
    providers: [provideIcons({ octMarkGithub, bootstrapTwitterX })],
    templateUrl: './site-header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager
})
export class SiteHeaderComponent {}
