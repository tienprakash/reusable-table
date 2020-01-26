import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProjectModel } from '../models/project-model';
import { Projects } from '../../fake-storage/project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  /* project retrieval */
  getProjects(): Observable<IProjectModel[]> {
    return of(Projects);
  }

}
