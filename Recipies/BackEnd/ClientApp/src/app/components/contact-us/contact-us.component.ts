import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './Message.service';
import { Message } from './Message';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
   today = new Date();
 dd = String(this.today.getDate()).padStart(2, '0');
 mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
 yyyy = this.today.getFullYear();

  constructor(private fb: FormBuilder,
     private cS: MessageService,
     private router: Router,
      ) { }

  ngOnInit() {

    this.messageForm = this.fb.group({
      Text: [''],
      Date: this.yyyy+'-'+this.mm+'-'+this.dd
      
    });
  }
  onFormSubmit() {
    this.submitted = true;

   /* if (this.messageForm.invalid) {
      return;
    }
*/
  this.loading = true;
    const message = this.messageForm.value;
    this.CreateUser(message as Message);

  }
  CreateUser(message: Message) {

      this.cS.createMessage(message).subscribe(
        () => {

          console.log("OK");

          this.router.navigate(['/']);
        }
      );


  }
}