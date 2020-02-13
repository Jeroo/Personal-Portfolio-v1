import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from './../_interfaces/applicant.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  applicants: Applicant[] = [];

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://api-portfolio-v01.herokuapp.com/api/applicants');   
  }
}
