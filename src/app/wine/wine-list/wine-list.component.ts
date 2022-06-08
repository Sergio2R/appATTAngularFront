import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { WineService } from '../services/wine.service';
import { MessageService } from '../services/message.service';
import { ClasificationService } from '../services/clasification.service';
import { ClasificationService as ApiClasificationService } from '../../api/services';
import { Clasification } from 'src/app/api/models';


@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent {

  get wineList() {
    return this.wineService.wineList;
  }

  clasificationList: Clasification[];

  public deleteById(id?: number) {
    this.wineService.deleteWine(id);
  }

  public updateById(id?: number) {
    this.wineService.getWine(id);
  }
  constructor(private wineService: WineService, private clasificationService: ClasificationService, private apiClasificationService: ApiClasificationService, private messageService: MessageService, private router: Router) {
  }

  ngOnInit() {
    this.apiClasificationService.apiClasificationGetClasificationListGet$Json().subscribe(rta => {
      this.clasificationList = rta;
    });
  }
}