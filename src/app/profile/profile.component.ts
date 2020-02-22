import { SocialNetwork } from './../_interfaces/social-network.interface';
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
  socialNetwork: SocialNetwork[] = [];
  isLoading: boolean = false;
  
  constructor(private applicantsService: ApplicantsService, private http: HttpClient) { }

  ngOnInit() {
    
    this.getProfile();

  


  }

  getProfile() {

      this.isLoading = true;
      this.applicantsService.get().subscribe((result: Applicant[]) => {        
        this.applicants = result;

        if (this.applicants.length > 0) {
          console.log(this.applicants[0].id)
          this.getSocialNetworks();
        }
        
        this.isLoading = false;
        
      }, error => {
        this.isLoading = false;
        console.log(error);
      });  
      
     
  }

  getSocialNetworks() {

      this.isLoading = true;

      this.http.get(`https://api-portfolio-v01.herokuapp.com/api/socialNetworks?filter[name][where][idapplicant]=${this.applicants[0].id}`).subscribe((result: SocialNetwork[]) => {        
      this.socialNetwork = result;

      console.log(this.socialNetwork)

      this.isLoading = false;
      
      }, error => {
        this.isLoading = false;
        console.log(error);
      }); 
       
 }

}
