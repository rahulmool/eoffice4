import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor(public navCtrl:NavController) { }
  dash(): void {
    this.navCtrl.navigateForward('/dashboard');
 }
  ngOnInit() {
  }

}
