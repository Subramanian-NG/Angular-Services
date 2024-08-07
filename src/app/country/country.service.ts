import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  // private apiUrl = 'https://restcountries.com/v2/name';

  // searchCountry(searchText: string): Observable<string[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/${searchText}?fields=name`).pipe(
  //     map((response: any[]) => response.map(country => country.name))
  //   );
  // }

  private apiUrl = 'https://restcountries.com/v2/all?fields=name';


  getAllCountries(): Observable<string[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response.map(country => country.name))
    );
  }

}
