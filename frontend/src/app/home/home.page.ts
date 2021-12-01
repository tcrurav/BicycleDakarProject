import { Component } from '@angular/core';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bicycles: any = [];

  constructor(private bicycleService: BicycleService) {
    this.getBicycles();
  }

  getBicycles(){
    this.bicycleService.getBicycles().subscribe(res => {
      this.bicycles = res;
    });
  }

}
