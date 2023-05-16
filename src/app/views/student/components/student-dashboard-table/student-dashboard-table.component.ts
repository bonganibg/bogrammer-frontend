import { Component, OnInit, Input } from '@angular/core';
import { StudentTask } from 'src/app/models/student-tasks.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-dashboard-table',
  templateUrl: './student-dashboard-table.component.html',
  styleUrls: ['./student-dashboard-table.component.css']
})
export class StudentDashboardTableComponent implements OnInit {

  @Input() dashboard!: StudentTask[]

  constructor(private studentService: StudentService) { }

  file!: File
  modalTask = this.setDefaultTask();

  ngOnInit(): void {
  }

  setDefaultTask(): StudentTask{
    return {
      task_id: 1,
      student_id: 1,
      course: "",
      review_score: 1,
      content_download_link: "",
      review_status: false,
      student_folder_upload_link: "",
      task_number: 1,
      topic: ""
    }
  }

  onChange(event: any){
    this.file = event.target.files[0]
  }

  onUpload(){
    console.log(this.file);
    let fileName = this.modalTask.content_download_link.replace('/courses', '').replace(".zip", '')
    let studentFolder = this.modalTask.student_folder_upload_link;

    this.studentService.uploadWork(this.file, fileName, studentFolder).then((response) => {
      alert("Task successfully uploaded")
    })
    .catch((error) => {
      alert("Unable to upload Task")
    })
  }

  showWorkModal(taskId: number){
    this.dashboard.map(task => {
      if (task.task_id === taskId){
        this.modalTask = task
      }
    })
  }

  requestReview(taskId: number, studentID: number){
    this.studentService.submitReviewRequest(studentID, taskId).then((response) => {
      alert("Review successfully requested")
    })
    .catch((error) => {
      alert("Error requesting review")
    })
    .finally(() => {
      location.reload()
    })
  }

  downloadCourseContent(taskId: number){
    let folderLink!: string;

    this.dashboard.map(task => {
      if (task.task_id === taskId){
        folderLink = task.content_download_link
      }
    })

    this.studentService.getTaskContent(folderLink).then((response) => {
      window.open(response.data)
    })
    .catch((error) => {
      alert("Error downloading content")
    })
  }

  getReviewStatus(taskId: number){
   let index = this.dashboard.findIndex(task => task.task_id == taskId)

   console.log(this.dashboard[index].review_score)

   if (this.dashboard[index].review_score.toString() != "None")
    return 4

   if (this.dashboard[index].review_status)
    return 2

   return 1
  }


}
