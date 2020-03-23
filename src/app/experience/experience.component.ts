import { Experience } from './../_interfaces/experience.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getExperience();
  }

  
  getExperience() {

    this.isLoading = true;
    this.http.get('https://api-portfolio-v01.herokuapp.com/api/experiences').subscribe((result: Experience[]) => {        
      this.experiences = result;

      this.isLoading = false;
      
    }, error => {
      this.isLoading = false;
      console.log(error);
    });    
 }

}
