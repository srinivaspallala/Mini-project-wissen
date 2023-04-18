import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { OrdersComponent } from '../orders/orders.component';
import { FilterPipe } from '../pipes/filter.pipe';

import { OrderlistComponent } from './orderlist.component';

describe('OrderlistComponent', () => {
  let component: OrderlistComponent;
  let fixture: ComponentFixture<OrderlistComponent>;
  let service: ApiService;
  let httpController: HttpTestingController;

	let url = 'localhost:3000/';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlistComponent,FilterPipe ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[ApiService]
      
    })
    
    .compileComponents();
    service = TestBed.get(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
  
//   // it('shouled orders get data',()=>{
//   //   component.ngOnInit();
//   // })

//   it('should call getBookById and return the appropriate Book', () => {

//     const testData = {
      
//       id:1

//     };
//     const spy = spyOn<any>(service, 'get').and.returnValue((""));
// 		// Arrange
//     const id = '1';

// 		// Act
//     service.getuserByid(id).subscribe((data) => {

// 	  // Assert
//       expect(data).toEqual(testData);
//     });

//     const req = httpController.expectOne({
//       method: 'GET',
//       url: `${url}/details/${id}`,
//     });
//     expect(req.request.method).toEqual('GET');
//     expect(spy).toHaveBeenCalled();
//         expect(spy.calls.mostRecent().args[0]).toEqual(url);

//     req.flush(testData);
// });


it("should call the ngOninit",()=>{
  expect(component.ngOnInit()).toBe()
})


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

  expect(component.orders).toEqual(response);
}));

});
