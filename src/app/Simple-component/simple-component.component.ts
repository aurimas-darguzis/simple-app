import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.css']
})
export class SimpleComponent implements OnInit {

  subject: string = 'world';
  foo: string = 'bar';

  constructor() { }

  ngOnInit() {
  }

}
