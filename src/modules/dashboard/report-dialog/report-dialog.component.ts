import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent implements OnInit {
  type:'comment'|'post'|'profile' = "post"
  constructor(public dialogRef: MatDialogRef<ReportDialogComponent>) { }

  ngOnInit(): void {
  }

  onDenyClick():void{

  }

  onCloseClick():void{
    this.dialogRef.close()
  }
}
