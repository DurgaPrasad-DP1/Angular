import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-Inches',
    templateUrl: './Inchestofeet.component.html'
})

export class InchestofeetComponent implements OnInit {
   result!:number;
   AddNumber(val1:string)
   {
    this.result=parseInt(val1)/12;
   }
   innerHTML!:number;
   LengthConverter(valNum:string) {
    this.innerHTML=parseInt(valNum)/12;
   }

   
   ngOnInit(): void {
   
   var convert = require('convert-units')
    convert(1).from('l').to('ml')
   }
}

