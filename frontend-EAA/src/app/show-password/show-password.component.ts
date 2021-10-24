import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.scss']
})
export class ShowPasswordComponent implements OnInit {
  showPassword : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
