import {Component, OnInit} from '@angular/core';

import {IComment} from "../../interfaces/comment.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {

  comment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment'];
      if (!this.comment) {
        this.commentService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
