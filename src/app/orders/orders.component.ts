
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
details:any;
filteredString:string='';
// dtOptions: DataTables.Settings={}


  constructor(
    private service:ApiService,
    
   
 
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
    },)
      }
}
