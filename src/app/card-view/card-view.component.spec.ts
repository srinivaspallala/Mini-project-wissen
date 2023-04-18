import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { delay, of } from 'rxjs';
import { ApiService } from '../api.service';
import { FilterPipe } from '../pipes/filter.pipe';

import { CardViewComponent } from './card-view.component';

const Data =[{
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

}]



describe('CardViewComponent', () => {
  let component: CardViewComponent
  let fixture: ComponentFixture<CardViewComponent>
  let service:ApiService,
  mockLoggerSvc:any
  let httpController:HttpTestingController
  

  let mocklist=Data;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewComponent,FilterPipe ],
      imports:[HttpClientTestingModule],
      providers:[ApiService]
    })
    
    .compileComponents();
    
  });

  beforeEach(() => {
   
    fixture = TestBed.createComponent(CardViewComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    service = TestBed.get(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });
  // afterEach(() => {
  //   // After every test, assert that there are no more pending requests.
  //   httpController.verify();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should be filtered",()=>{
    expect(component.filteredString.length).toBe(0)
  });

  it("should call the get data",()=>{
    expect(component.getDet()).toBe()
  })

  it('testing subscribe method is called',fakeAsync(()=>{
    let productSpy = spyOn(service,'get').and.returnValue(of(mocklist));
    let subSpy=spyOn(service.get(),'subscribe');
    
    tick();
    fixture.detectChanges();
    expect(subSpy).toHaveBeenCalled();
    expect(productSpy).toHaveBeenCalledBefore(subSpy);
    component.getDet();
    // expect(component.details).toEqual(mocklist)
  }))
  
  // it('testing execution within subscribe method',fakeAsync(()=>{
  //   component.getDet();
  //   expect(component.details).toBeDefined();
  //   // expect(component.details.length).toBeGreaterThan(5)
  // }))

  

  it("should call get api and return details", fakeAsync(() => {
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

    component.getDet();

    fixture.detectChanges();
  
    expect(component.details).toEqual(response);
  }));
 


});
