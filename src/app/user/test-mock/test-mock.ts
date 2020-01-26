import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPersonnelModel } from '../models/personnel-model';
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
    public personnal = [
        {
            id: 151,
            name: 'Alan B. Shepard, Jr.',
            job: 'Astronaut',
            year_joined: 1959,
            missions: ['MR-3', 'Apollo 14']
        }
    ];
    constructor() { }

    /* project retrieval */
    getProjects(): Observable<IProjectModel[]> {
        return of(this.projects);
    }

    /* personnel retrieval */
    getPersonnel(): Observable<IPersonnelModel[]> {
        return of(this.personnal);
    }
}
