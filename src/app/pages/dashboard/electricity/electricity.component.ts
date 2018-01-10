import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AngularFireDatabase } from 'angularfire2/database';

import { ElectricityService } from '../../../@core/data/electricity.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy {

  @Input('data') data: Array<any>;
  public userId: string;
  type = 'week';
  types = ['week', 'month', 'year'];
  public amountSpent: number = 7488;
  public energySpent: number = 737;

  currentTheme: string;
  themeSubscription: any;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, private themeService: NbThemeService) {
    this.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }
  getData() {

    // this.data = this.db.object('')
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}

