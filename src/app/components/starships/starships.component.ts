import { Component, OnInit } from '@angular/core';
import { Starships } from '../../models/starships';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  private page_title: string;
  public starships: Starships;
  public result;

  constructor(
  ) {
    this.page_title='Starships';
    this.starships = new Starships('','');
   }

  ngOnInit() {
  }

  onSubmit() {

  }

}
