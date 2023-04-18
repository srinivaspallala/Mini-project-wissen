import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';




describe('ApiService', () => {
  let service: ApiService;
  let http:HttpClient;
  let httpController:HttpTestingController
  // let api_serve=ApiService



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService]
    });
    service = TestBed.get(ApiService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.get(HttpTestingController);
    
    // service = new ApiService(httpClientSpy)
  });

  afterEach(()=>{
    httpController.verify();
  })


  it('should be created', () => {
    expect(service).toBeDefined();
  });
  // it('should be created', () => {
  //   expect(service).toBeDefined();
  // });
  
  it('can test HttpClient.get', () => {
    const  Data = [{
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

   
    service.get()
      .subscribe(data =>
        expect(data).toEqual(Data),
        
      );

    const req = httpController.expectOne({
      method: 'GET',
    })

    expect(req.request.method).toEqual('GET');

    req.flush(Data);

    httpController.verify();
  });


  it('can test HttpClient.delete', () => {
    const  Data = [{
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

   
    service.delete(1)
      .subscribe(data =>
        expect(data).toEqual(Data),
        
      );

    const req = httpController.expectOne({
      method: 'DELETE',
    })

    expect(req.request.method).toEqual('DELETE');

    req.flush(Data);

    httpController.verify();
  });


  it('can test HttpClient.post', () => {
    const  Data = [{
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

   
    service.add(1)
      .subscribe(data =>
        expect(data).toEqual(Data),
        
      );

    const req = httpController.expectOne({
      method: 'POST',
    })

    expect(req.request.method).toEqual('POST');

    req.flush(Data);

    httpController.verify();
  });


  it('can test HttpClient.getbyuser', () => {
    const  Data = [{
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

   
    service.getuserByid(1)
      .subscribe(data =>
        expect(data).toEqual(Data),
        
      );

    const req = httpController.expectOne({
      method: 'GET',
    })

    expect(req.request.method).toEqual('GET');

    req.flush(Data);

    httpController.verify();
  });



  it('can test HttpClient.update ', () => {
    const  Data = [{
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

   
    service.updateUser(2)
      .subscribe(data =>
        expect(data).toEqual(Data),
        
      );

    const req = httpController.expectOne({
      method: 'PUT',
    })

    expect(req.request.method).toEqual('PUT');

    req.flush(Data);

    httpController.verify();
  });


});




