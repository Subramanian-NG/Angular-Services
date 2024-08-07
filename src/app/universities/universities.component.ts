import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CountryService } from '../country/country.service';
import { UniversityService } from '../university/university.service'; // Import the new service
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule, // Add MatIconModule here
    NavigationComponent
  ],
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent {
  countries: string[] = [];
  filteredCountries: string[] = [];
  searchText: string = '';
  selectedCountry: string = '';
  universities: any[] = [];
  filteredUniversities: any[] = [];
  universitySearchText: string = '';

  constructor(
    private countryService: CountryService,
    private universityService: UniversityService
  ) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(countries => {
      this.countries = countries;
      this.filteredCountries = countries;
    });
  }

  filterCountries(): void {
    this.filteredCountries = this.countries.filter(country =>
      country.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onCountrySelected(country: string): void {
    this.selectedCountry = country;
    this.universityService.getUniversitiesByCountry(country).subscribe(universities => {
      this.universities = universities;
      this.filteredUniversities = universities;
    });
  }

  filterUniversities(): void {
    this.filteredUniversities = this.universities.filter(university =>
      university.name.toLowerCase().includes(this.universitySearchText.toLowerCase())
    );
  }

  clearSearchText(): void {
    this.searchText = '';
    this.filterCountries(); 
    this.selectedCountry = ''; 
    this.universities = [];
    this.filteredUniversities = []; 
    this.universitySearchText = ''; 
  }

  clearUniversitySearchText(): void {
    this.universitySearchText = '';
    this.filterUniversities(); 
  }
}
