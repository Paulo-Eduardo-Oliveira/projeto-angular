import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private appUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  remove(id: number) {
    return this.http.delete<Animal>(`${this.appUrl}animais/${id}`);
  }

  removeOutroAnimal(id: number) {
    return this.http.delete<Animal>(`${this.appUrl}outrosAnimais/${id}`);
  }

  getAllAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.appUrl + 'animais');
  }

  getAllOutrosAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.appUrl + 'outrosAnimais');
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.appUrl}animais/${id}`);
  }

  getOutroItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.appUrl}outrosAnimais/${id}`);
  }
}
