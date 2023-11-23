import { Component } from '@angular/core';
import{HotelmanagmentserviceService}from 'src/app/service/hotelmanagmentservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
hotelmanagment:any={
  "hotelName":"",
  "hotelAddress":"",
  "gstNumber":""

}
constructor(private hotelmanagmentservice : HotelmanagmentserviceService){}
submitHotelManagment(){
  console.log(this.hotelmanagment);
  this.hotelmanagmentservice.postHotelManagmentDetails(this.hotelmanagment).subscribe(
    (data:any)=>{
      console.log(data);
    },
    (error:any)=>{
      console.log(error);
    }
  )
  this.hotelmanagment={};
}
}
