import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';
import {Router} from '@angular/router';
import {SkillModel} from '../SkillModel';

@Component({
  selector: 'app-skill-update-select',
  templateUrl: './skill-update-select.component.html',
  styleUrls: ['./skill-update-select.component.css']
})
export class SkillUpdateSelectComponent implements OnInit {

  skillModel: SkillModel = new SkillModel();
  employeeModel: EmployeeModel = new EmployeeModel();
  employeemod: EmployeeModel;
  employeemodel: EmployeeModel[];
  constructor(private employeeService: EmployeeService, private router:Router) { }


  ngOnInit() {
    this.ViewEmployee();
  }
  ViewEmployee():void{
    this.employeeService.getEmployeeforskill().subscribe(data=>this.employeemodel=data);
    console.log('data retrived');
  }
  skillUpdate(employee: EmployeeModel): void{
    this.employeemod = employee;
  }

}
