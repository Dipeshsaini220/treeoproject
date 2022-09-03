import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }

  createdata(data : any){
   return this.http.post('https://36a2-103-167-194-180.in.ngrok.io/lead',data)
  }
}
