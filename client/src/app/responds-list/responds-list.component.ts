import {Component, Input, OnInit} from '@angular/core';
import {Respond} from '../models/Respond';

@Component({
  selector: 'app-responds-list',
  templateUrl: './responds-list.component.html',
  styleUrls: ['./responds-list.component.css']
})
export class RespondsListComponent implements OnInit {

  @Input() responds: Array<Respond> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
