import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private apiUrl = 'http://universities.hipolabs.com/search';

  constructor(private http: HttpClient) { }

  getUniversitiesByCountry(country: string): Observable<any[]> {
    const url = `${this.apiUrl}?country=${encodeURIComponent(country)}`;
    return this.http.get<any[]>(url);
  }
}
