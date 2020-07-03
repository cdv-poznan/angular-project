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
  backgroundUrl = '../assets/img/tshirt.png';
  selectedColor = 'white';
  tshirtText = '';
  selectedSize = 'l';
  price: number;
  shouldAddZero = false;
  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('tshirtCanvas', {
      selectionBorderColor: '#441c55'
    });
    this.canvas.setBackgroundImage(this.backgroundUrl, this.canvas.renderAll.bind(this.canvas));
    this.price = this.randomPrice();
    this.checkIfAddZero();
  }

  //  this method generates a random t-shirt price, because why not 🤷 🤷‍♂️
  randomPrice() {
    const random: number = Math.floor(Math.random() * 10000) / 100;
    return random;
  }

  // checks if the second number after decimal point is 0 - allows displaying (for instance) 13.10 instead of 13.1
  checkIfAddZero() {
    const re = /^(\d*)\.\d$/;
    if (re.test(this.price.toString())) {
      this.shouldAddZero = true;
    } else {
      this.shouldAddZero = false;
    }
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (loadEvent: any) => {
      const imgObj = new Image();
      imgObj.src = loadEvent.target.result as string;
      const userImage = new fabric.Image(imgObj, {
        left: 130,
        top: 100,
      });
      userImage.scaleToWidth(this.canvas.getWidth() - 240);
      this.canvas.add(userImage);
      this.canvas.renderAll();
    };
    reader.readAsDataURL(file);
  }

  checkIfElementAdded(typeOfElement) {
    const arr = this.canvas.getObjects();
    return arr.some(elem => typeOfElement === elem.type);
  }

  onTextChanged(event) {
    if (this.checkIfElementAdded('i-text')) {
      this.canvas.getObjects().forEach( (item) => {
        console.log(item);
        if (item.type === 'i-text') {
          item.text = this.tshirtText;
          this.canvas.renderAll();
        }
      });
    } else {
      const userText = new fabric.IText(this.tshirtText, {
        fontFamily: 'arial black',
        left: 100,
        top: 200
      });
      this.canvas.add(userText);
    }
  }


}
