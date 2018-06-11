import { Injectable } from '@angular/core';
import {observable, of, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders ,HttpClientModule,} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import {EmployeeModel} from './EmployeeModel';  
import { SkillModel } from './SkillModel';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  myname :string;
  city:string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient) { }
  
  ApiURL='http://localhost:8080/EmployeeRest/employees/api';
  getname():string{
    this.myname="NIIT LTD";
    return this.myname;
  }
  
  getCity():Observable<string>{
    this.city="CHENNAI METRO CITY";
    return of(this.city);
  }
  getEmpl(): Observable<string>{

    return this.http.get<string>(this.ApiURL);
  }

  getEmployee(): Observable<EmployeeModel[]>{
    console.log('Get employe method');
    return this.http.get<EmployeeModel[]>(this.ApiURL)
      .pipe(catchError(this.handleError<EmployeeModel[]>('getEmployee',[])));
  }
  getEmployeeforskill(): Observable<EmployeeModel[]>{
    console.log('Get employe method');
    return this.http.get<EmployeeModel[]>(this.ApiURL+"/skillupdate")
      .pipe(catchError(this.handleError<EmployeeModel[]>('getEmployee',[])));
  }

  getSkill(skill: string): Observable<SkillModel[]>{
    console.log('get skill method invoked');
    return this.http.get<SkillModel[]>(this.ApiURL+"/getSkill/"+skill);    
  }
  addEmployee(employeemodel: EmployeeModel): Observable<EmployeeModel>{
    console.log('Employee name is: '+employeemodel.emplyeeName);
    return this.http.post<EmployeeModel>(this.ApiURL+"/add", employeemodel)
  }
  skillReg(skillmodel: SkillModel): Observable<SkillModel>{

    return this.http.post<SkillModel>(this.ApiURL+"/addskill",skillmodel);
  }
  public deleteEmployee(employee){
    return this.http.delete(this.ApiURL+"/delete/"+employee.employee_Id);
  }  
  public editEmployee(employee:EmployeeModel){    
    return this.http.put<EmployeeModel>(this.ApiURL+"/update", employee)
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    };
  }

}
