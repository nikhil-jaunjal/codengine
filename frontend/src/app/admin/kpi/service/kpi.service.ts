import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KPIService {

  private apiURL: string = environment.apiURL
  constructor(private http: HttpClient) { }

  addKpi() {
    // Add API call here
  }
}
