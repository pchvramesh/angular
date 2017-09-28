import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnChanges {
  @Input() object: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.object);
  }

  ngOnChanges() {
    console.log(this.object);
  }

}
