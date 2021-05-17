import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './modules/employees/content/content.component';
import { FilterListComponent } from './modules/employees/left-filters/filter-list.component';
import { FiltersComponent } from './modules/employees/top-filters/filters.component';
import { EmployeesComponent } from './modules/employees/employee-card/employees.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FilterListComponent,
    FiltersComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
