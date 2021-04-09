import { Injectable } from '@angular/core';
import { IFormStructure, IFormData } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FormUpdateService {
  private API_URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) {
    
  }

  public getFormStructure(): Observable<IFormStructure> {
    return this.http.get<IFormStructure>(`${this.API_URL}/GetForm`);
  }

  public getFormData(): Observable<IFormData> {
    return this.http.get<IFormData>(`${this.API_URL}/GetData`);
  }

}