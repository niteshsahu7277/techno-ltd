import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  result: string;
  /**
* any: It is a built-in data type in TypeScript
which helps in describing the type of variable which we are unsure of while writing the code. *
**/
users: any;
  constructor(private data: DataService) {
    
  }

  ngOnInit(): void {
    this.result = this.data.helloService();
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
      }
      );
  }

}