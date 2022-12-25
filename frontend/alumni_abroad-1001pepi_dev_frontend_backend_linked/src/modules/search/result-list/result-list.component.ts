import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  results:any[] = [{name:'Tonle Coralie', position:'Student', id:'dsdsds'}, {name:'John Doe', position:'Engineer', id:'cxcnv'}]

  onViewRes(id:string){
    this.router.navigate(['core', 'users', id])
  }

}
