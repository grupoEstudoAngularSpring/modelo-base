import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
   
    ClienteModel;
    constructor(
        private http: HttpClient
    ) { }

   
}
