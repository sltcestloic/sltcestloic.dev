import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThoughtPost } from '../models/thought.model';

@Injectable({
    providedIn: 'root'
})
export class ThoughtsService {
    private readonly thoughtsUrl = '/api/thoughts';

    public constructor(private readonly http: HttpClient) {}

    public findAll(): Observable<ThoughtPost[]> {
        return this.http.get<ThoughtPost[]>(this.thoughtsUrl);
    }

    public findOne(slug: string | null): Observable<ThoughtPost | undefined> {
        if (!slug) {
            return of(undefined);
        }

        return this.http.get<ThoughtPost>(`${this.thoughtsUrl}/${slug}`);
    }
}
