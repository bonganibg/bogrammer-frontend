import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/models/review-backlog.model';
import { ReviewScore } from 'src/app/models/review-score.model';
import { ReviewerService } from 'src/app/services/reviewer.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-backlog-table',
  templateUrl: './backlog-table.component.html',
  styleUrls: ['./backlog-table.component.css']
})
export class BacklogTableComponent implements OnInit {

  @Input() backlog!: Review[]

  constructor(private reviewerService: ReviewerService) { }

  modalReview = this.setModalDefault()
  modalToggle = true;

  ngOnInit(): void {
  }

  submitReview(reviewForm: NgForm){
    if (reviewForm.valid){

      let score: ReviewScore = {
        review_id: this.modalReview.review_id,
        score: reviewForm.value.reviewScore
      }

      this.reviewerService.submitReview(score).then((response) => {
        alert("Review submitted")
      })
      .catch((error) => {
        alert("Unable to submit review")
      })
      .finally(() => {
        location.reload()
      })
    }
  }

  setModalDefault(): Review{
    return {
      accepted: false,
      course: "",
      folder_link: "",
      review_id: 1,
      student_name: "",
      student_number:  "",
      task: "",
      task_folder_link:  ""
    }
  }

  setReviewModal(id: Number){
    this.backlog.map(review => {
      if (review.review_id === id){
        this.modalReview = review

      }
    })
  }

  acceptReview(id: Number){
    this.backlog.map(review => {
      if (review.review_id === id){
        review.accepted = true
      }
    })
  }
}
