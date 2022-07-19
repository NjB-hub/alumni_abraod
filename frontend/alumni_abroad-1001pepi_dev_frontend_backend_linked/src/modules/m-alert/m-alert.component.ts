import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-m-alert',
  templateUrl: './m-alert.component.html',
  styleUrls: ['./m-alert.component.scss']
})
export class MAlertComponent implements OnInit {

    private _success = new Subject<string>();
  
    staticAlertClosed = false;
    successMessage = '';
  
    @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
    @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;
  
    ngOnInit(): void {
  
      this._success.subscribe(message => this.successMessage = message);
      this._success.pipe(debounceTime(3000)).subscribe(() => {
        if (this.selfClosingAlert) {
          this.selfClosingAlert.close();
        }
      });
    }
  
    public changeSuccessMessage() { this._success.next("Post Sent!"); }

}
