import { Component, OnInit, Input } from '@angular/core';
import {EmployeeModel} from '../EmployeeModel';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { SkillModel } from '../SkillModel';

@Component({
  selector: 'app-skill-rgstr',
  templateUrl: './skill-rgstr.component.html',
  styleUrls: ['./skill-rgstr.component.css']
})
export class SkillRgstrComponent implements OnInit {

  employeemodel: EmployeeModel = new EmployeeModel();
  skillModel: SkillModel = new SkillModel();
  @Input() employee:EmployeeModel;
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
  }
  skillRegister(): void {
    this.employee.placementCount = this.employeemodel.placementCount;
    this.employee.batchCount = this.employeemodel.batchCount;
    this.employee.experiance = this.employeemodel.experiance;
    this.employeeService.editEmployee(this.employee).subscribe(data=>{alert("Skill Registerd Successfully");
  });
  this.skillModel.empMaster = this.employee;    
  this.employeeService.skillReg(this.skillModel).subscribe();
    console.log('Certification is'+this.skillModel.certificate);
    console.log('skill is'+this.skillModel.skill);
    console.log('empl is'+this.employee.placementCount);
  }
}
