import { Component, OnInit } from '@angular/core';
import { Species } from '../../models/species';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],

})
export class SpeciesComponent implements OnInit {

  private page_title: string;
  public species: Species;
  public result;

  constructor(

  ) {
    this.page_title = 'Species';
    this.species = new Species('','');
   }

  ngOnInit() {
    
  }

  onSubmit() {

  }

}

