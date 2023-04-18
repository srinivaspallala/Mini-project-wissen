import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orders:any;

  constructor(
    
    private service:ApiService,
   
    private Activate:ActivatedRoute
  ) { }

  ngOnInit(): void {

   this.get();
    
    
  }

  get(){
    console.log(this.Activate.snapshot.params['uid'])
    this.service.getuserByid(this.Activate.snapshot.params['uid']).subscribe((res:any)=>{
      this.orders=res
  
     
    })
  }
}
