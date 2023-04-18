import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  users:any;
editForm!:FormGroup;
  constructor(
    public fb:FormBuilder,
    private service:ApiService,
    public route:Router,
    private Activate:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editForm=this.fb.group({
      id:["",Validators.required],
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      address:["",Validators.required],
      city:["",Validators.required],
      state:["",Validators.required],
      zipcode:["",Validators.required],
    })

this.get();

    // console.log(this.Activate.snapshot.params['uid'])

    
  }

  get(){
    this.service.getuserByid(this.Activate.snapshot.params['uid']).subscribe((res:any)=>{

      this.users=res;
      this.editForm.controls["id"].setValue(res.id)
      this.editForm.controls["firstname"].setValue(res.firstname),
      this.editForm.controls["lastname"].setValue(res.lastname),
      this.editForm.controls["email"].setValue(res.email),
      this.editForm.controls["password"].setValue(res.password),
      this.editForm.controls["address"].setValue(res.address),
      this.editForm.controls["city"].setValue(res.city),
      this.editForm.controls["state"].setValue(res.state),
      this.editForm.controls["zipcode"].setValue(res.zipcode)
      })
  }

  update(){
    this.service.updateUser(this.editForm.value).subscribe((res)=>{
      this.route.navigateByUrl("/listview");
    })
  }
}
