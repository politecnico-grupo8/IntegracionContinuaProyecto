import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  private page_title: string;
  public people: People;
  public result;

  constructor(

  ) {
    this.page_title = 'People';
    this.people = new People('','');
   }

  ngOnInit() {

  }

  onSubmit() {

  }

}
