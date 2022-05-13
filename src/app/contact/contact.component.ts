import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SuccessfulSendComponent } from '../successful-send/successful-send.component';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  email: any;
  message: any;
  name: any;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {

    alert('sending mail sucessful');
  }

}

