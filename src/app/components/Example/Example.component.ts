import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-Example',  
  templateUrl: './Example.component.html',  
  styleUrls : ['./Example.component.css']  
})  
export class ExampleComponent {  
  public value1: number = 10;  
  public array1: Array<number> = [10, 22, 14];  
  public dt1: Date = new Date();  
  public val:number=5;
  public status: boolean = true;  
  
  public returnString(): string {  
      return "String return from function";  
  }  
  public showAlert() : void {  
    console.log('You clicked on the button...');  
    alert("Durga Prasad");  
  }
}  