import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPersonnelModel } from '../models/personnel-model';
import { Personnel } from '../../fake-storage/personnel-data';

@Injectable({
  providedIn: 'root'
})
export class AstronetsService {

  constructor() { }

  /* personnel retrieval */
  getPersonnel(): Observable<IPersonnelModel[]> {
    return of(Personnel);
  }
}
