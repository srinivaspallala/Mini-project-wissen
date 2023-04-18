import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  addForm!:FormGroup
  user:any;
  customer:any;
  constructor(
    private fb:FormBuilder,
    public service:ApiService,
    public route:Router,
    public http:HttpClient
  ) { }

  ngOnInit(): void {
    this.addForm=this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required],
      
    })

  }

  get(){
    this.service.get().subscribe((res:any)=>{

      this.user = res.find((a:any)=>{
        return a.email === this.addForm.value.email && a.password === this.addForm.value.password
      })
      if(this.user){
        alert("login success...!");

        localStorage.setItem('token',"srinu123")
        this.route.navigateByUrl("/cardview")
      }else{
        alert("Entered credientials are Wrong")
      }
    },err=>{
      alert("something went wrong")
    })
  }

}
