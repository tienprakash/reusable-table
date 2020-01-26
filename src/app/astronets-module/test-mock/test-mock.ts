import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPersonnelModel } from '../models/personnel-model';

@Injectable()
export class TestMock {
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

    /* personnel retrieval */
    getPersonnel(): Observable<IPersonnelModel[]> {
        return of(this.personnal);
    }
}
