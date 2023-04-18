import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../api.service';

import { EditcustomerComponent } from './editcustomer.component';

describe('EditcustomerComponent', () => {
  let component: EditcustomerComponent;
  let fixture: ComponentFixture<EditcustomerComponent>;
  let service:ApiService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcustomerComponent ],
      imports:[ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers:[ApiService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.get(ApiService)

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it("should not updated",()=>{
  //   component.update();
  //   expect(component.route.navigateByUrl).not.toHaveBeenCalled()
  // })

  it('should not to be called',()=>{
    component.editForm.controls['firstname'].setValue({firstname:"srinu"})
    spyOn(component.route,'navigateByUrl')
    component.update();
    expect(component.route.navigateByUrl).not.toHaveBeenCalled()
  })
  // it("should updated",()=>{
  //   // component.update();
  //   spyOn(component.route,'navigateByUrl')
  //   component.route.navigateByUrl;
  //   expect(component.route.navigateByUrl).toBe('/listview')
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
  
    spyOn(service, 'getuserByid').and.returnValue(of(response))
  
    component.get();
  
    fixture.detectChanges();
  
    expect(component.users).toEqual(response);
  }));

  it("should call update Api and return route", fakeAsync(() => {
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
  
    spyOn(service, 'updateUser').and.returnValue(of(response))
  
    component.update();
  
    fixture.detectChanges();

  
    // expect(component.users).toEqual(response);
    // spyOn(component.route,'navigateByUrl')
    // expect(component.route.navigateByUrl).toEqual("/listview")
  }));

});
