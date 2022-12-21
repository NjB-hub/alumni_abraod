import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent implements OnInit {
  isSubmitted:boolean = false;
  isLoading:boolean = true;
  constructor(public dialogRef: MatDialogRef<ReportDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {username: string}) { }

  ngOnInit(): void {
  }

  onDenyClick():void{
    this.dialogRef.close()
  }

  onCloseClick():void{
    this.dialogRef.close()
  }

  onSubmit(form : NgForm){
    const comment = form.value['comment']
    //code to send the report
    this.isSubmitted = true;
  }
}
