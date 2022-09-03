import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm} from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // signupForm : any = FormGroup
  constructor(private  service: SignupService) { }

  datas = ''
  ngOnInit(): void {
    // this.setformstate()
  }
//   setformstate() : void{
//   this.signupForm = new FormGroup({
//     'email' : new FormControl(null),
//     'password': new FormControl(null),
//   })
// }
getdata(data : any){
  console.log("data",data)
  this.datas = data
}

}
