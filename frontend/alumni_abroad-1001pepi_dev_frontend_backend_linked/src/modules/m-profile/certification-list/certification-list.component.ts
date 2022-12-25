import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification-list',
  templateUrl: './certification-list.component.html',
  styleUrls: ['./certification-list.component.scss']
})
export class CertificationListComponent implements OnInit {

  certifications:any[] = [{name:"Learn Oriented Object Programming", deliveryDate:'August 2021', organization:'coursera'}]
  constructor() { }

  ngOnInit(): void {
  }

}
