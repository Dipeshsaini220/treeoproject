import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http : HttpClient) {}

  users : any = ''


  ngOnInit(){
    this.booldata()
  }

  datas : any = [
    {
      value : 'false'
    },
    {
      value : 'fasle'
    },
    {
      value : 'false'
    },
    {
      value : 'trfalsue'
    },
    {
      value : 'false'
    },
  ]

  booldata(){
    for(let i=0 ; i < this.datas.length ; i++){
      console.log("i",this.datas[i])
      if(this.datas[i].value == 'true'){
        alert('value is false')
        break
      }
    }
  }

  getdata(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe(res => {
      console.log("ress",res)
      this.users = res
    })
  }

}


