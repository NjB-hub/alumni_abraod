import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const name = form.value['name'];
    const certification = form.value['certification'];
    const company = form.value['company'];

  }

}
