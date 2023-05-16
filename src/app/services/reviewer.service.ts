import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { ReviewScore } from '../models/review-score.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {

  REVIEW_ENDPOINT = 'reviewer'
  BACKLOG_ENDPOINT = "reviewer/backlog"
  constructor() { }

  async   getReviewBacklog(){
    return axios({
      method: "GET",
      baseURL: environment.BASE_URL,
      url: this.BACKLOG_ENDPOINT
    })
  }

  async submitReview(review: ReviewScore){
    return axios({
      method: 'PUT',
      baseURL: environment.BASE_URL,
      url: `reviewer/${review.review_id}`,
      data: review
    })
  }

  async getWorkFolder(studentFolderLink: string, taskFolderLink: string){
    let path = UtilService.getStudentDropboxPath(studentFolderLink, taskFolderLink)

    return axios({
      method: 'GET',
      baseURL: environment.BASE_URL,
      url: "student/task",
      params: {
        "file_path": path
      }
    })
  }
}
