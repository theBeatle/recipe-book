import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send() {
    let element = <HTMLInputElement>document.getElementById("alertbox");
    element.innerHTML = '<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><strong>Mail sended!</strong></div>';
  }

}
