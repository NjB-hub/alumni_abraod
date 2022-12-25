import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.scss']
})
export class RequestDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequestDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {name: string, 
  email:string, dept:"gi"|"gm"|"gele"|"gind"|"gc"|"gtel", year:string|number}) { }

  ngOnInit(): void {
  }

  onDenyClick():void{

  }

  onCloseClick():void{
    this.dialogRef.close()
  }

}
