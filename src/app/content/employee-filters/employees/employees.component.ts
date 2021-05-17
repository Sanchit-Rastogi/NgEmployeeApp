import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from "../../../services/employee-detail.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public service: EmployeeDetailService) { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete this record ?")) {
      this.service.deleteEmployee(id).subscribe(
        res => {
          this.service.refreshList();
          console.log(res);
        },
        err => { console.log(err) }
      )
    }
  }

}
