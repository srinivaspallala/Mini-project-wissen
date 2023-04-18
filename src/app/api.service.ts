import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Details } from './details';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  add(data:any){
    return this.http.post("http://localhost:3000/details/",data)
  }
  get():Observable<Details[]>{

    let myHeaders= new HttpHeaders({"Auth_KEY":"34-Srinu-123"});
    // let myparams=new HttpParams();
    // myparams=myparams.set("srinu","val1")
    return this.http.get<Details[]>("http://localhost:3000/details",{headers:myHeaders})
  }
  delete(id:any){
    return this.http.delete("http://localhost:3000/details/"+id)

  }
  getuserByid(id:any){
    return this.http.get("http://localhost:3000/details/"+id)
  }
  updateUser(data:any){
    return this.http.put("http://localhost:3000/details/"+data.id,data)
  }


  isLoggedIn(){
    return localStorage.getItem('token');
  }
}
