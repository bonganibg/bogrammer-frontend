import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review-backlog.model';
import { ReviewerService } from 'src/app/services/reviewer.service';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {

  constructor(private reviewerService: ReviewerService) { }

  backlog!: Review[];

  async ngOnInit() {
    await this.loadDashboard()
  }

  async loadDashboard(){
    this.reviewerService.getReviewBacklog().then((response) => {
      this.backlog = response.data
    })
    .catch((error) => {
      console.log(error)
      alert("Error loading the backlog")
    })
  }

}
