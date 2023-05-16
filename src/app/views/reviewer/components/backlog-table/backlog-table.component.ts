import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review-backlog.model';

@Component({
  selector: 'app-backlog-table',
  templateUrl: './backlog-table.component.html',
  styleUrls: ['./backlog-table.component.css']
})
export class BacklogTableComponent implements OnInit {

  @Input() backlog!: Review[]
  constructor() { }

  ngOnInit(): void {
  }

}
