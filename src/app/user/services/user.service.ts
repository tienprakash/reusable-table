import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProjectModel } from '../models/project-model';
import { Projects } from '../../fake-storage/project-data';
import { IPersonnelModel } from '../models/personnel-model';
import { Personnel } from '../../fake-storage/personnel-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /* project retrieval */
  getProjects(): Observable<IProjectModel[]> {
    return of(Projects);
  }

  /* personnel retrieval */
  getPersonnel(): Observable<IPersonnelModel[]> {
    return of(Personnel);
  }
}
