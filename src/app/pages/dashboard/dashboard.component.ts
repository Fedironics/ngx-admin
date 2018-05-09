import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { iMeterData } from '../../models/imeter-data.model';
import { AngularFireObject } from 'angularfire2/database/interfaces';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  public userId: string;
  public isOn: boolean = true;
  public iMeterData: Observable<iMeterData> ;
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {

  }
  getMeterData(userId: string) {
    this.iMeterData = this.db.object('iMeterData/' + userId ).valueChanges();
  }
  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.userId = user.uid;
        // TODO get user with all the data associated with it
        this.getMeterData(user.uid);
      } else {
        //TODO user is signed out
      }
    });
  }
}
