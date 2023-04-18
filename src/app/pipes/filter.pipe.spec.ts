import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filter:FilterPipe

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule,
          
        ],
        declarations:[FilterPipe]
      });
  });
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('transform the filter',()=>{
    const pipe = new FilterPipe();
    expect(pipe.transform('',"")).toBe('')
  })

  it("should contain user",()=>{
    const pipe=new FilterPipe();
    expect(pipe.transform("","users")).toEqual([])
  })
  it('should be contain firstname',()=>{
    const pipe=new FilterPipe();
    expect(pipe.transform('[ users ]',"[firstname]")).toEqual([])
    
  })
  it('should cover the push method',()=>{
    const pipe=new FilterPipe();
    // pipe.transform("if","").if()
    expect(pipe.transform("users","firstname").push()).toEqual((0))
  })


  it('should cover the users method',()=>{
    const pipe=new FilterPipe();
 expect(pipe.transform('sample text','filteredString').push([{name:"srinu"}])).toEqual(1)
   
  });

  // it('should return items if no field is given', () => {
  //   const items = [];
  //   items.push({ name: 'Hans' });
  //   const pipe=new FilterPipe();
  //   const filtered = pipe.transform(items, 'Hans');

  //   expect(filtered).toEqual(items);
  // });

  // it('should return empty array if no items given', () => {
  //   const items = null;
  //   const pipe=new FilterPipe();
  //   const filtered = pipe.transform(items, 'name', );

  //   expect(filtered.length).toBe(0);
  //   expect(filtered).toEqual([]);
  // });


 

});
