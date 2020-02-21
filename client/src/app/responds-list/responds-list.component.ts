import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-responds-list',
  templateUrl: './responds-list.component.html',
  styleUrls: ['./responds-list.component.css']
})
export class RespondsListComponent implements OnInit {

  @Input() responds: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
