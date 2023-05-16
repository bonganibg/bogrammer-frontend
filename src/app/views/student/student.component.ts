import { Component, OnInit } from '@angular/core';
import { StudentTask } from 'src/app/models/student-tasks.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  dashboardTasks!: StudentTask[]
  studentID = 3001
  default_students = [
    3001,
    3002,
    3003,
    3004,
    3005,
    3006
  ]

  async ngOnInit(){
    await this.getStudentDashboard()
  }

  async changeStudent($event: any){
    let index = $event.target.selectedIndex
    this.studentID = this.default_students[index]

    await this.getStudentDashboard()
  }

  async getStudentDashboard(){
    this.studentService.getStudentDashboard(this.studentID).then((response) => {
      this.dashboardTasks = response.data
      console.log(response.data)
    })
    .catch((error) => {
      alert("Error loading the dashboard")
    })
  }


}
