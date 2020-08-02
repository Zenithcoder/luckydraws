import { Component, OnInit } from '@angular/core';
import { Winners } from 'src/app/models/winners';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  Winners: Winners[];
  constructor() { }

  ngOnInit() {
  }

}
