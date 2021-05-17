import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { EmployeeDetail } from "../models/employee-detail.model"

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http: HttpClient) { }

  formData: EmployeeDetail = new EmployeeDetail();
  employeeList: EmployeeDetail[] = [];
  readonly baseUrl = "https://localhost:5001/api/Employee";

  async refreshList() {
    await this.http.get(this.baseUrl).toPromise().then(emp => this.employeeList = emp as EmployeeDetail[]);
  }

  addEmployee() {
    return this.http.post(this.baseUrl, this.formData);
  }

  deleteEmployee(id: Number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
