import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    welcomd{{name}}
  </h2>
  <input type="text" value="mallikarjuna"
  `,
  styles: [`
  div{
    color:green
  }
  `]
})
export class TestComponent implements OnInit {
 
  public name="Codevolution";
  constructor() { }

  ngOnInit(): void {
  }

}
