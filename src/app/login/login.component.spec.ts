import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormControl, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../api.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: ApiService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule,FormsModule
      ],
      providers:[ApiService]
    })
    .compileComponents();
    service = TestBed.get(ApiService);

    
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should contain default value for the login',()=>{
    expect(component.addForm.value).toEqual({email:'',password:''})
  });
  
  it('form invalid when empty',()=>{
    component.addForm.controls['email'].setValue('');
    component.addForm.controls['password'].setValue('')
    expect(component.addForm.valid).toBeFalsy()
  })

  it('email field validity', () => {
    const email = component.addForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
  });

  it('password field validity', () => {
    const password = component.addForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();
  });
  
  it('should not do the login call if the form is not valid',()=>{
    component.addForm.setValue({email:"",password:""});
    spyOn(component.route,'navigateByUrl')
    component.get();
    expect(component.route.navigateByUrl).not.toHaveBeenCalled()
  })
  
  // it('Login Success',()=>{
  //   component.addForm.value['email']='adithya@gmail.com'
  //   component.addForm.value['password']='1234567890'
   
  //   expect(component.service.get).toBe(true)
  // })

  it("should call getUsers and return list of users", fakeAsync(() => {
    const response = [{
      id: 2,
      firstname: "adithya",
      lastname: "Nagaraj",
      email: "adithya@gmail.com",
      password: "1234567890",
      address: "Ballari",
      city: "Ballari",
      state: "Andhra pradesh",
      zipcode: "5678909", 
      products: [
        {
          name: "Vivo",
          date: "06/05/2022",
          quantity: "6",
          price: "100"
        },
        {
          name: "iphone",
          date: "06/01/2022",
          quantity: "1",
          price: "200"
        } ]
  
  }];
  
    spyOn(service, 'get').and.returnValue(of(response))
  
    component.get();
  
    fixture.detectChanges();
    component.get()
  
    // expect(component.addForm.controls['password']).toBe();
    // expect(component.user).toEqual(response)
  }));


  it('should', fakeAsync(() => {
    spyOn(component, 'get');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.get).toHaveBeenCalled();
    
  }));

});
