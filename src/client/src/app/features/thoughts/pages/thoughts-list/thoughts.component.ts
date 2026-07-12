import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteHeaderComponent } from '../../../../shared/ui/site-header/site-header.component';
import { ThoughtsService } from '../../api/thoughts.service';

@Component({
    selector: 'app-thoughts',
    standalone: true,
    imports: [AsyncPipe, DatePipe, NgFor, NgIf, RouterLink, SiteHeaderComponent],
    templateUrl: './thoughts.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './thoughts.component.scss'
})
export class ThoughtsComponent {
    public readonly posts$ = this.thoughtsService.findAll();

    public constructor(private readonly thoughtsService: ThoughtsService) {}
}
