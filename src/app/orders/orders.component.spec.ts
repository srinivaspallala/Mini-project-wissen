import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { FilterPipe } from '../pipes/filter.pipe';

import { OrdersComponent } from './orders.component';

interface Data {
  
  address:any,
  state:any
}

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let httpController:HttpTestingController
  let service: ApiService;
  
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersComponent,FilterPipe ],
      imports:[HttpClientTestingModule, ReactiveFormsModule,FormsModule],
      providers:[ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // httpClient = TestBed.inject(ApiService);
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

  it("should get orders",()=>{
    component.getDet();
  });

// it("should cover the Api request",()=>{
  
//   const testData: Data = {
      
//         address:'karnataka',
//         state:'karnataka'
  
//       };
//       httpClient.get()
//       .subscribe(data =>
//         expect(data).toEqual(testData)
//       );

//       const req = httpController.expectOne({
//             method: 'GET',
//               url: `/details`,
//           })
      
//           expect(req.request.method).toEqual('GET');
      
//           req.flush(testData);
      
//           httpController.verify();
   
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

  component.getDet();

  fixture.detectChanges();

  expect(component.details).toEqual(response);
}));
  
});
