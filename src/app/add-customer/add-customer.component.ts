import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
addForm!:FormGroup
details:any;
  constructor(
    private fb:FormBuilder,
    private service:ApiService,
    public route:Router
  ) { }

  ngOnInit(): void {
    this.addForm=this.fb.group({
     
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      address:["",Validators.required],
      city:["",Validators.required],
      state:["",Validators.required],
      zipcode:["",Validators.required],
    })
  }
  submitHandler(){
   
    this.service.add(this.addForm.value).subscribe((res)=>{
      this.details=res;
      // alert("customer added successfully...!")
      this.route.navigateByUrl("/cardview");
    })
  }

}
