import { Component, OnInit } from '@angular/core';
import { Change } from 'src/app/modules/change';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
name: Change = new Change("Anna", 15);
  

  constructor() { }

  ngOnInit(): void {
  }
 toggle(): void{
   this.name.firstname = "Therese";
   this.name.age = 35;
   this.name.done = !this.name.done
}
}
