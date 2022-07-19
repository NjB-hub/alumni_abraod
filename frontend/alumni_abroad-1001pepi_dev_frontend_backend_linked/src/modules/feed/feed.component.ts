import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedService } from './services/feed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private feedService: FeedService) { }

  user:any;
  alertMessage:string = '';

  ngOnInit(): void {
    const tmpUser:any = localStorage.getItem('user');
    this.user = JSON.parse(tmpUser);

    this.activatedRoute.queryParams.subscribe(params => {
      this.alertMessage = params['alertMessage'];
     })
  }

  postEventClicked(){
    this.hidePostOfferForm();
    this.hidePostOtherForm();
  }

  postOfferClicked(){
    this.hidePostEventForm();
    this.hidePostOtherForm();
  }

  postOtherClicked(){
    this.hidePostEventForm();
    this.hidePostOfferForm();
  }

  hidePostEventForm(){
    const comp = document.getElementById('publishEventForm');
    comp?.classList.remove("show");
  }

  hidePostOfferForm(){
    const comp = document.getElementById('publishOfferForm');
    comp?.classList.remove("show");
  }

  hidePostOtherForm(){
    const comp = document.getElementById('publishOtherForm');
    comp?.classList.remove("show");
  }

  postSentAlert(){
    
  }

  ngOnDestroy(): void {
   
  }

}
