import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blood-bankk-app0';
  constructor(private router:Router){
    this.router.navigate(['/home'])
  }
}
