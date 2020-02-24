import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseuiAngularLibraryService } from 'firebaseui-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    
    {
      title: 'My Tasks',
      url: '/tasks',
      icon: 'hourglass'
    },
    {
      title: 'Assisned Tasks',
      url: '/work',
      icon: 'briefcase'
    },
    {
      title: 'Review Tasks',
      url: '/review',
      icon: 'warning'
    },
    {
      title: 'Todo List',
      url: '/todo',
      icon: 'add-circle'
    },
    {
      title: 'notification',
      url: 'notification',
      icon: 'notifications'
    },
    {
      title:'logout',
      url:'logout',
      icon: 'exit'
    }
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth:AngularFireAuth,private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
