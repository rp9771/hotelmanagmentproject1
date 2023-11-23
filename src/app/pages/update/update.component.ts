import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { HotelmanagmentserviceService } from 'src/app/service/hotelmanagmentservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  hotelmanagment:any={
    "hotelName":"",
    "hotelAddress":"",
    "gstNumber":""
  
  }
  id:any
  constructor(private route:ActivatedRoute,private hotelmanagmentservice : HotelmanagmentserviceService,
    private router:Router){

    }

    ngOnInit(){

      this.id = this.route.snapshot.params;
     
      console.log(this.id);
     
      this.hotelmanagmentservice.getByid(this.id.id).subscribe(
     
       (data:any)=>{
     
         console.log(data)
     
         this.hotelmanagment={

         "hotelName" :data.hotelName,
     
         "hotelAddress":data.hotelAddress,
     
         "gstNumber":data.gstNumber
     
         }
     
       },
     
       (error:any)=>{
     
         console.log(error);  
     
       }
     
      )
     
      
     
     }
     
     

  updateHotelManagment(){
    console.log(this.hotelmanagment);
    this.hotelmanagmentservice.update(this.hotelmanagment).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigateByUrl("/list")
      },
      (error:any)=>{
        console.log(error);
      }
    )
    this.hotelmanagment={};
  }
  }
  
