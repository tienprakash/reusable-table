import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProjectModel } from '../models/project-model';

@Injectable()
export class TestMock {
    public projects = [
        {
            id: 1,
            name: 'Mercury',
            cost: 277000000,
            first_flight: 'September 9, 1959',
            status: 'Complete'
        }
    ];
    constructor() { }

    /* project retrieval */
    getProjects(): Observable<IProjectModel[]> {
        return of(this.projects);
    }
}
