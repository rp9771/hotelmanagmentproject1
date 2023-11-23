import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelmanagmentserviceService {

  constructor(private http:HttpClient) {}
    postHotelManagmentDetails(data:any){
      return this.http.post(" http://localhost:8080/hotel/",data);
  }
  getHotelManagmentDetails(){
    return this.http.get("http://localhost:8080/hotel/");
}

deleteHotelManagmentDetails(id:any){
  return this.http.delete("http://localhost:8080/hotel/by?hotelid="+id);
}
update(data:any){
  return this.http.put(" http://localhost:8080/hotel/",data);
}
getByid(id:any){
  return this.http.get(" http://localhost:8080/hotel/by?hotelid=" +id);
}
   }
