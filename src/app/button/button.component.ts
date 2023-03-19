import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  liste: any[] =[
    {txt: "Vatandas",id:1},
    {txt: "deprem bağış",id:2},
    {txt: "deprem bağış",id:3},
  ]
   selected: string="vatandas";
  ngOnInit(): void {
  }

}
