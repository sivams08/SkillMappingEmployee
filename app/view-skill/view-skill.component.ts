import { Component, OnInit, Input } from '@angular/core';
import {EmployeeModel} from '../EmployeeModel';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { SkillModel } from '../SkillModel';

@Component({
  selector: 'app-view-skill',
  templateUrl: './view-skill.component.html',
  styleUrls: ['./view-skill.component.css']
})
export class ViewSkillComponent implements OnInit {

  @Input() skillmdlArr: SkillModel[];
  employee: EmployeeModel;
  constructor() { }

  ngOnInit() {
  }

}
