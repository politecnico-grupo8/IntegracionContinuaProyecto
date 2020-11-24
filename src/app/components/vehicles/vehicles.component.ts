import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../../models/vehicles';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  providers: [VehiclesService]
})
export class VehiclesComponent implements OnInit {

  public page_title: string;
  public vehicles: Vehicles;
  public result;

  constructor(
    private _vehiclesService: VehiclesService
  ) {
    this.page_title = 'Vehicles';
    this.vehicles = new Vehicles('','');
   }

  ngOnInit() {

  }


  }

}

