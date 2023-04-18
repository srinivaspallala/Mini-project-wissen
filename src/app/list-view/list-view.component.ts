import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
details:any;
filteredString:string='';
// dtOptions:DataTables.Settings={}


  constructor(
    private service:ApiService,
    public route:Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    
    // this.dtOptions={
    //   pagingType:'full_numbers',
    //   pageLength:5,
    //   lengthMenu:[5,10,15],
    //   processing:true
    // }
    this.getDet();
  }
  getDet(){
    this.service.get().subscribe((res)=>{
      this.details=res;
    })
      }

      delet(item:any){
          this.service.delete(item.id).subscribe((res)=>{
            // alert("customer deleted sucessfully..!");
            this.getDet();
          },
          )
      }

      navigateTo(id:any){
        this.route.navigateByUrl("/edit/"+id)
    
      }

      navigate(id:any){
        this.route.navigateByUrl("/orderlist/"+id)
      }

}
