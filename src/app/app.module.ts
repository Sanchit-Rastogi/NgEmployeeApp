import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FilterListComponent } from './content/filter-list/filter-list.component';
import { EmployeeFiltersComponent } from './content/employee-filters/employee-filters.component';
import { FiltersComponent } from './content/employee-filters/filters/filters.component';
import { EmployeesComponent } from './content/employee-filters/employees/employees.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FilterListComponent,
    EmployeeFiltersComponent,
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
