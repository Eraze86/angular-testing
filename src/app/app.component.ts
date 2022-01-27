import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstname: string = "Therese";
  lastname: string = "Rosvall";
  age: number = 35;
  married: boolean = false
}

