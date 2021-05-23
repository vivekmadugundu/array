import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRoutings, } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { DummyComponent } from './dummy/dummy.component';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';






@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    myRoutings,
    
   
    
  
    
   
    
    DummyComponent,
    
   
    
  
    
   
    
    OneComponent,
    
   
    
  
    
   
    
    TwoComponent,
    
   
  
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
