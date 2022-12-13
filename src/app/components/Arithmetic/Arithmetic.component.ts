import { Component } from '@angular/core';

@Component({
    selector: 'app-Arithmetic',
    templateUrl: './Arithmetic.component.html'
})

export class ArithmeticComponent{
   result!:number;
   AddNumber(val1:string,val2:string)
   {
    this.result=parseInt(val1)+parseInt(val2);
   }
   SubNumber(val1:string,val2:string)
   {
    this.result=parseInt(val1)-parseInt(val2);
   }
   MulNumber(val1:string,val2:string)
   {
    this.result=parseInt(val1)*parseInt(val2);
   }
   DivNumber(val1:string,val2:string)
   {
    this.result=parseInt(val1)/parseInt(val2);
   }
}