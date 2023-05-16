import { Injectable } from '@angular/core';
import axios from 'axios'
import { environment } from 'src/environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  STUDENT_REVIEW_REQUEST_ENDPOINT = "student/review/request"
  constructor() { }

  submitReviewRequest(studentID: number, taskId: number){
    return axios({
      method: 'POST',
      baseURL: environment.BASE_URL,
      url: this.STUDENT_REVIEW_REQUEST_ENDPOINT,
      params:{
        "student_id": studentID,
        "task_id": taskId
      }
    })
  }

  getStudentDashboard(studentID: number){
    return axios({
      method: "GET",
      baseURL: environment.BASE_URL,
      url: `student/${studentID}/dashboard`
    })
  }

  getTaskContent(folderLink: string){
    let path = UtilService.getWorkDropboxPath(folderLink);

    return axios({
      method: "GET",
      baseURL: environment.BASE_URL,
      url: `student/task`,
      params: {
        "file_path": path
      }
    })
  }

  uploadWork(file: any, folderLink: string, studentFile: string){
    let path = UtilService.getStudentDropboxPath(studentFile, folderLink);

    const formData = new FormData();

    return axios({
      method: 'POST',
      baseURL: environment.BASE_URL,
      url: 'student/tasl',
      params: {
        "file_data": path
      },
      data: {
        "file": formData
      }
    })
  }
}
