import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from '../_services/applicants.service';
import { Applicant } from '../_interfaces/applicant.interface';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  applicants: Applicant[] = [];
  isLoading: boolean = false;
  interests: string = "";

 constructor(private applicantsService: ApplicantsService) { }

 ngOnInit() {
    
  this.getProfile()
}

getProfile() {
    this.isLoading = true;
    this.applicantsService.get().subscribe((result: Applicant[]) => {        
      this.interests = result[0].interests;
      this.isLoading = false;      
    }, error => {
      this.isLoading = false;
      console.log(error);
    });    
  }
}