import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/models/student.model';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
   
  studentData :any= {}

  constructor(
    private sharedService :SharedService,
    private router:ActivatedRoute
  ) {
    
   }

  ngOnInit(): void {
    this.router.params.subscribe(pram =>
      //  console.log(res['id'])
       this.sharedService.getStudentById(pram['id']).subscribe(
         res=>{
          
            this.studentData=res
            console.log(this.studentData)
         }
       )
       );
        
       
    // this.router.params.subscribe(
    //   pram  =>{
    //     this.id=pram.get('query')
    //     console.log(this.id)
         
    //   }
    // )
  }

}
