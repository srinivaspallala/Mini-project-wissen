import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate() {

    let token=localStorage.getItem('token');
    console.log(token)
    if(token!="srinu123"){
      return true;
    }
   alert("you Dont have permission to open...!")
   return false;
  }
  
}
