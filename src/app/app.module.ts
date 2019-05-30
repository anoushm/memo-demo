import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { DataListComponent } from './data-list/data-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DataListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
