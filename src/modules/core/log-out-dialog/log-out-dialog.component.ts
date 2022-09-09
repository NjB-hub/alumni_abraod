import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrls: ['./log-out-dialog.component.scss']
})
export class LogOutDialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<LogOutDialogComponent>) { }

  onCloseClick():void{
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
