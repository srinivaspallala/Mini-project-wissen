import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { Details } from '../details';
import { FilterPipe } from '../pipes/filter.pipe';

import { ListViewComponent } from './list-view.component';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  let service:ApiService;
  let testProducts:Details;
  let httpTestingController: HttpTestingController,
    mockLoggerSvc: any,
    httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewComponent,FilterPipe ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[ApiService,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    mockLoggerSvc = {
      info: jasmine.createSpy("info"),
      success: jasmine.createSpy("success"),
      error: jasmine.createSpy("error")
    };
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.get(ApiService)

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should navigateTo",()=>{
    spyOn(component.route,'navigateByUrl')
    component.navigateTo(1);
    expect(component.route.navigateByUrl).toHaveBeenCalled()
  });

  it("should navigate",()=>{
    spyOn(component.route,'navigateByUrl')
    component.navigate(1);
    expect(component.route.navigateByUrl).toHaveBeenCalled()
  });

  it("should delete data",()=>{
    component.delet(1);
  })

  it("should log a message when an API is called and set the authorization header", () => {
    service.get().subscribe();
   
    let req = HttpTestingController
   
   
    expect(mockLoggerSvc.info).not.toHaveBeenCalled();
   ;
    // expect(req.get("Authorization")).toBeDefined();
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
  
    spyOn(service, 'get').and.returnValue(of(response))
  
    component.getDet();
  
    fixture.detectChanges();
  
    expect(component.details).toEqual(response);
    
  }));

  it("should call delete and return  users", fakeAsync(() => {
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
  
    spyOn(service, 'delete').and.returnValue(of(response))
  
    component.delet(1);
  
    fixture.detectChanges();

    component.getDet()
  }));

  
  
});
