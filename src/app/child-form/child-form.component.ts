import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  template: `
    <div [formGroup]="parentForm">
      child-form works!
    </div>
  `,
  styles: [
  ]
})
export class ChildFormComponent implements OnInit {
  @Input()
  parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
