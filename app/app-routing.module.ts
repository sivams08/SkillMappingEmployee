import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import { SkillRegistrationComponent } from './skill-registration/skill-registration.component';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import { SkillUpdateSelectComponent } from './skill-update-select/skill-update-select.component';
import {RouterModule,Routes} from '@angular/router';

const routes:Routes= [
  {path: 'AddEmployee', component:AddEmployeeComponent},
  {path: 'DeleteEmployee', component:DeleteEmployeeComponent},
  {path: 'EditEmployee', component:EditEmployeeComponent},
  {path: 'ViewEmployee', component:ViewEmployeeComponent},
  {path: 'SkillRegistration',component:SkillRegistrationComponent},
  {path: 'SkillSearch',component:SkillSearchComponent},
  {path: 'SkillUpdate',component:SkillUpdateSelectComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
