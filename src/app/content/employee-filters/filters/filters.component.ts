import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetail } from 'src/app/models/employee-detail.model';
import { EmployeeDetailService } from 'src/app/services/employee-detail.service';
import { EmployeeFilterService } from "../../../services/employee-filters.service"

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private readonly EmployeeFilterService: EmployeeFilterService, public EmployeeDetailService: EmployeeDetailService) { }

  alphabets: string[] = [];
  formClass: string = "modal-form";


  ngOnInit(): void {
    this.alphabets = this.EmployeeFilterService.buildAlphabetFilters();
  }

  displayForm() {
    this.formClass = "modal-form-visible"
  }

  hideForm() {
    this.formClass = "modal-form"
  }

  refreshList() {
    this.EmployeeDetailService.refreshList();
  }

  async filterByInitial(letter: string) {
    await this.EmployeeDetailService.refreshList();
    this.EmployeeDetailService.employeeList = this.EmployeeDetailService.employeeList.filter(emp => {
      return emp.firstName[0].toLowerCase().includes(letter.toLowerCase());
    });
  }

  async filterBySearch(input: string) {
    await this.EmployeeDetailService.refreshList();
    this.EmployeeDetailService.employeeList = this.EmployeeDetailService.employeeList.filter(emp => {
      return emp.firstName[0].toLowerCase().includes(input.toLowerCase());
    });
  }

  onSubmit(form: NgForm) {
    this.EmployeeDetailService.addEmployee().subscribe(
      res => {
        console.log(res);
        console.log(this.EmployeeDetailService.formData);
        this.hideForm();
        this.resetFrom(form);
        this.EmployeeDetailService.refreshList();
      },
      err => { console.log(err); }
    )
  }

  resetFrom(form: NgForm) {
    form.form.reset();
    this.EmployeeDetailService.formData = new EmployeeDetail();
  }

}
