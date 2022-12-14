import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent implements OnInit {
  type:'comment'|'post'|'profile' = "post"
  constructor(public dialogRef: MatDialogRef<ReportDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {type : "post"|"comment"|"profile", 
    reporterName:string, reporterUsername:string, reportedName:string, reportedUsername:string, comment : string, at: string}) { }

  ngOnInit(): void {
  }

  onDenyClick():void{

  }

  onCloseClick():void{
    this.dialogRef.close()
  }
}
