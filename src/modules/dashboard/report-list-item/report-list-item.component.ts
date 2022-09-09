import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';


@Component({
  selector: 'app-report-list-item',
  templateUrl: './report-list-item.component.html',
  styleUrls: ['./report-list-item.component.scss']
})
export class ReportListItemComponent implements OnInit {
  @Input() type: 'comment' | 'post' | 'profile'  = 'comment';
  @Input() reporterName: string = 'John DOE'
  @Input() reporterUsername: string = 'johndoe'
  @Input() reportedName: string = 'Jane DOE'
  @Input() reportedUsername: string = 'janedoe'
  @Input() comment:string = 'This is bad content'
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(ReportDialogComponent,{width: '600px'})

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
      }
    })
  }

}
