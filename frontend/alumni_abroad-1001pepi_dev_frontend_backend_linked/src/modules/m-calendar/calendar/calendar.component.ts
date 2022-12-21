import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  isLoading:boolean=false;
  frequencyChoice: "this month" | "this week" | "this year" = "this week";

  isWeekEmpty:boolean = false;
  isMonthEmpty:boolean = false;
  isYearEmpty:boolean = false;
  isSavedShown:boolean = false;

  eventSaved = ['consortium', 'dinner', 'mariage']

  eventWeek = ['eventA', 'eventB', 'eventC']
  eventMonth = ['consortium', 'dinner', 'mariage']
  eventYear = ['consortium', 'dinner', 'mariage']

  isWeek:boolean = true
  isMonth:boolean = false
  isYear:boolean = false

  textButton:string="View events saved"


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onChangeSaved() : void{
    this.isSavedShown = !this.isSavedShown
    if(this.isSavedShown){
      this.textButton = "Hide events saved"
    } else {
      this.textButton = "View events saved"
    }
    
  }

  onAddEvent():void{
    this.router.navigate(['core','feed'])
  }

  onChangeFreqMonth():void{
    this.frequencyChoice = "this month"
    this.isMonth = true
    this.isWeek = false
    this.isYear = false
  }
  onChangeFreqWeek():void{
    this.frequencyChoice="this week"
    this.isMonth = false
    this.isWeek = true
    this.isYear = false
  }
  onChangeFreqYear() : void{
    this.frequencyChoice="this year"
    this.isMonth = false
    this.isWeek = false
    this.isYear = true
  }
}
