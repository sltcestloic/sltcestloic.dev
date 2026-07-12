import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { marked } from 'marked';
import { Observable, tap } from 'rxjs';
import { SiteHeaderComponent } from '../../../../shared/ui/site-header/site-header.component';
import { ThoughtsService } from '../../api/thoughts.service';
import { ThoughtPost } from '../../models/thought.model';

@Component({
    selector: 'app-thought',
    standalone: true,
    imports: [AsyncPipe, DatePipe, NgIf, RouterLink, SiteHeaderComponent],
    templateUrl: './thought.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './thought.component.scss'
})
export class ThoughtComponent {
    public readonly post$: Observable<ThoughtPost | undefined>;

    public constructor(
        private readonly route: ActivatedRoute,
        private readonly thoughtsService: ThoughtsService,
        private readonly title: Title
    ) {
        this.post$ = this.thoughtsService.findOne(this.route.snapshot.paramMap.get('slug')).pipe(
            tap(post => {
                if (post) {
                    this.title.setTitle(`${post.title} - sltcestloic.dev`);
                }
            })
        );
    }

    public renderMarkdown(markdown: string): string {
        return marked.parse(markdown, {
            async: false
        }) as string;
    }
}
