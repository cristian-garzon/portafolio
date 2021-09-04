import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/model/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent implements OnInit {
  feedback = new Feedback();
  error?: any;

  constructor(private service: FeedbackService) {}

  ngOnInit(): void {}

  public send(): void {
    this.service.sendMessage(this.feedback).subscribe(() => {
     Swal.fire('message send',"i'll contact with you as soon as possible",'success'); 
     this.feedback.email = '';
     this.feedback.feedback = '';
     this.feedback.name = '';
    },err => {
      if(err.status === 400) this.error = err.error});
  }
}
