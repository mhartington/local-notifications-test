import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }
  async setup() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: Math.floor(Math.random() * 90),
          title: 'Testing',
          body: 'some stuff',
          schedule: { at: new Date(Date.now() + 1000 * 90) },
        },
      ],
    });
  }
}
