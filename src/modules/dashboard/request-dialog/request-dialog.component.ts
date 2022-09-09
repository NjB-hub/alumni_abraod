import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.scss']
})
export class RequestDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequestDialogComponent>) { }

  ngOnInit(): void {
  }

  onDenyClick():void{

  }

  onCloseClick():void{
    this.dialogRef.close()
  }

}
