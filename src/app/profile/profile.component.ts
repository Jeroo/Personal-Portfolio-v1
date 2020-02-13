import { Applicant } from './../_interfaces/applicant.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicantsService } from '../_services/applicants.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  applicants: Applicant[] = [];
  isLoading: boolean = false;
  
  constructor(private applicantsService: ApplicantsService) { }

  ngOnInit() {
    
    this.getProfile()
  }

  getProfile() {

      this.isLoading = true;
      this.applicantsService.get().subscribe((result: Applicant[]) => {        
        this.applicants = result;

        this.isLoading = false;
        
      }, error => {
        this.isLoading = false;
        console.log(error);
      });    
  }

}
