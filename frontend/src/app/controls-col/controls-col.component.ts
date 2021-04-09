import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { IInput } from '../interfaces';

@Component({
  selector: 'controls-col',
  templateUrl: './controls-col.component.html',
  styleUrls: ['./controls-col.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ControlsColComponent implements OnInit {
  @Input() controlsList: IInput[];

  constructor() { }

  ngOnInit(): void {
  }

}
