import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";



@Component({
 

  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
'Super Hot', 'Weather Changer'];
model = new Employee(18, '', '','');

// model: Employee={
//   id: 0,
//   name: '',
//   power: '',
//   alterEgo: '',
// } 
submitted = false;


onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }
 

}
