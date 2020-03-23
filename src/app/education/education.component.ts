import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../_interfaces/education.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getEducation();
  }

  
  getEducation() {

    this.isLoading = true;
    this.http.get('https://api-portfolio-v01.herokuapp.com/api/educations?filter[order]=datefrom%20desc').subscribe((result: Education[]) => {        
      this.educations = result;

      this.isLoading = false;
      
    }, error => {
      this.isLoading = false;
      console.log(error);
    });    
 }

}
