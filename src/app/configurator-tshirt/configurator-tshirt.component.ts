import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { Form } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-configurator-tshirt',
  templateUrl: './configurator-tshirt.component.html',
  styleUrls: ['./configurator-tshirt.component.scss']
})
export class ConfiguratorTshirtComponent implements OnInit {
  canvas: any;
  selectedColor = 'white';
  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('tshirtCanvas');
    // this.canvas.add(new fabric.IText('Hello Fabric!'));
    fabric.Image.fromURL('../assets/img/tshirt.png', img => {this.canvas.add(img)});
  }


  public onColorSelection(value) {
    // this.selectedColor =
    console.log(value);
  }



}
