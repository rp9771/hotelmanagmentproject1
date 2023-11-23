import { Component } from '@angular/core';
import { HotelmanagmentserviceService } from 'src/app/service/hotelmanagmentservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list:any;
  constructor(private hotelManagmentService: HotelmanagmentserviceService){}
  ngOnInit(){
    this.hotelManagmentService.getHotelManagmentDetails().subscribe(
 (data:any)=>{
 
       console.log(data);
 
       this.list =data;
 
     },
 
     (error:any)=>{
 
       console.log(error);  
 
     }
 
   )


  }

  deleteHotelManagmentDetails(id:any){

    this.hotelManagmentService.deleteHotelManagmentDetails(id).subscribe(

      (data:any)=>{

        console.log(data);

        this.hotelManagmentService.getHotelManagmentDetails().subscribe(

          (data:any)=>{

            console.log(data);

            this.list =data;

          },

          (error:any)=>{

            console.log(error);  

          }

        )

      },

      (error:any)=>{

        console.log(error);  

      }

    )

   }
}
