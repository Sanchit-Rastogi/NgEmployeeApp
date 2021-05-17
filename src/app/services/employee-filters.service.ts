import { Injectable } from '@angular/core';
import { Alphabets } from '../enums/alphabets.enum';
import { EmployeeDetailService } from "./employee-detail.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeFilterService {

  constructor(public service: EmployeeDetailService) { }

  buildAlphabetFilters() {
    let filters: string[] = [];

    for (let alphabet in Alphabets) {
      if (isNaN(Number(alphabet))) {
        filters.push(alphabet.toString());
      }
    }

    return filters;
  }

  buildDepartmentFilters() {

    let filters: string[] = [];
    filters = [...new Set(this.service.employeeList.map(e => e.department))];
    return filters;

  }

  buildOfficeFilters() {

    let filters: string[] = [];
    filters = [...new Set(this.service.employeeList.map(e => e.office))];
    return filters;

  }

  buildJobTitleFilters() {

    let filters: string[] = [];
    filters = [...new Set(this.service.employeeList.map(e => e.jobTitle))];
    return filters;

  }


}
