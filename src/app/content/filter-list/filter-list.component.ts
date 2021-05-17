import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from "../../services/employee-detail.service";
import { EmployeeFilterService } from "../../services/employee-filters.service";

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  constructor(private readonly EmployeeDetailService: EmployeeDetailService, private readonly EmployeeFilterService: EmployeeFilterService) { }

  departmentList: string[] = [];
  officeList: string[] = [];
  jobTitleList: string[] = [];

  async ngOnInit() {
    await this.EmployeeDetailService.refreshList();
    this.departmentList = this.EmployeeFilterService.buildDepartmentFilters();
    this.officeList = this.EmployeeFilterService.buildOfficeFilters();
    this.jobTitleList = this.EmployeeFilterService.buildJobTitleFilters();
  }

  async filterByDepartment(department: string) {
    await this.EmployeeDetailService.refreshList();
    this.EmployeeDetailService.employeeList = this.EmployeeDetailService.employeeList.filter(emp => {
      return emp.department.toLowerCase().includes(department.toLowerCase());
    });
  }

  async filterByOffice(office: string) {
    await this.EmployeeDetailService.refreshList();
    this.EmployeeDetailService.employeeList = this.EmployeeDetailService.employeeList.filter(emp => {
      return emp.office.toLowerCase().includes(office.toLowerCase());
    });
  }

  async filterByJobTitle(jobTitle: string) {
    await this.EmployeeDetailService.refreshList();
    this.EmployeeDetailService.employeeList = this.EmployeeDetailService.employeeList.filter(emp => {
      return emp.jobTitle.toLowerCase().includes(jobTitle.toLowerCase());
    });
  }

}
