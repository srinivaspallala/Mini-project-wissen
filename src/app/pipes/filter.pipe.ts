import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  

  transform(value: any,filteredString:string){
    if(filteredString === ''){
      return value;
    }

    const users:any= [];
    // for(const  user of value){
    //   if(user['firstname'] === filteredString){
    //     users.push(user);
    //   }
    // }

    value.forEach((a:any)=>{
      if(a["firstname"].trim().toLowerCase().includes(filteredString.toLowerCase())){
        users.push(a)
      }
    });
    
    return users;
  }

  // transform(value:any[],filterString:string,propName:string):any[]{
  //   const result:any=[];
  //   if(!value || filterString==='' || propName===''){
  //      return value;
  //   }
  //   value.forEach((a:any)=>{
  //     if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
  //       result.push(a)
  //     }
  //   });
  //   return result;
  // }


  
}
