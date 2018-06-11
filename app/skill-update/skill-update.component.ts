import { Component, OnInit, Input } from '@angular/core';
import {EmployeeModel} from '../EmployeeModel';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { SkillModel } from '../SkillModel';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit {

  employeemodel: EmployeeModel = new EmployeeModel();
  skillModel: SkillModel = new SkillModel();
  @Input() employee:EmployeeModel;
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
  }

  skillUpdate(): void{    
    this.skillModel.empMaster = this.employee;
    this.employeeService.skillReg(this.skillModel).subscribe(data=>{alert("Skill updated successfully"); });
  }
}
