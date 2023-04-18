
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  details: any;
  filteredString: string = '';
  // dtOptions: DataTables.Settings={}
  constructor(
    private service: ApiService,

  ) { }

  ngOnInit(): void {
    this.getDet();
    // this.dtOptions={
    //   pagingType:'full_numbers',
    //   pageLength:5,
    //   lengthMenu:[5,10,15],
    //   processing:true
    // }
  }


  getDet() {
    this.service.get().subscribe((res) => {
      this.details = res;
    })
  }

  
}


