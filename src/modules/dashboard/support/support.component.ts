import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  developers:any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.developers = [
      {
        firstName: 'Coralie',
        username: 'ralietonle',
        promo: 'GI 2023',
        description:"I am a student and developer. I'm really passionate about front-end development. Contact me for visual problems on the site.",
        github: '',
        email:'',
        linkedin: ''     
      },
      {
        firstName: 'Ramsès',
        username: '1001pepi',
        promo: 'GI 2023',
        description:'',
        github: '',
        email:'',
        linkedin: ''
      },
      {
        firstName: 'Bertha',
        username: 'nj-hub',
        promo: 'GI 2023',
        description:'',
        github: '',
        email:'',
        linkedin: ''
      }
    ]
  }

}
