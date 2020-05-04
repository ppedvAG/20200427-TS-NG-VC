import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css']
})
export class PropsComponent implements OnInit {
  public prop1: string = 'ValueOfProp1';
  private prop2: string = 'ValueOfProp2';
  prop3: string = 'ValueOfProp3';

  constructor() { }

  ngOnInit(): void {
  }

}
