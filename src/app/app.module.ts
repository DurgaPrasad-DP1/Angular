import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DemoComponent } from './components/Demo/Demo.component';
import { ExampleComponent } from './components/Example/Example.component';
import { Navcomponent } from './components/nav/nav.component';
import { Testcomponent } from './components/Test/Test.component';
import { TwoWayBindingComponent } from './components/TwoWayBinding/TwoWayBinding.component';
import { ArithmeticComponent } from './components/Arithmetic/Arithmetic.component';
import { InchestofeetComponent } from './components/Inchestofeet/Inchestofeet.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Navcomponent,
    Testcomponent,
    ExampleComponent,
    TwoWayBindingComponent,
    ArithmeticComponent,
    InchestofeetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
