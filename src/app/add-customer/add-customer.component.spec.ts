import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../api.service';

import { AddCustomerComponent } from './add-customer.component';

describe('AddCustomerComponent', () => {
  let component: AddCustomerComponent;
  let fixture: ComponentFixture<AddCustomerComponent>;
  let service:ApiService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerComponent ],
      imports:[ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule],
      providers:[ApiService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.get(ApiService)

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should submit new customer', () => {
    component.submitHandler();
    // expect(component).toBeTruthy();
  });
  it("should not called",()=>{
    spyOn(component.route,'navigateByUrl')
    component.submitHandler();
    expect(component.route.navigateByUrl).not.toHaveBeenCalled()
  });

  // it('should add the data',()=>{
  //   expect(component.details).toEqual('')
  // })
  it("should  called",()=>{
    spyOn(component.route,'navigateByUrl')
    component.submitHandler();
    component.route.navigateByUrl("/cardview")
  });

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
  
    spyOn(service, 'add').and.returnValue(of(response))
    spyOn(component.route,'navigateByUrl')
  
    component.submitHandler();
  
    fixture.detectChanges();
  
    expect(component.details).toEqual(response);
    expect(component.route.navigateByUrl).toHaveBeenCalled()
  }));


});
