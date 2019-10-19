import { Component } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ionViewDidEnter(){
    console.log('iro start -> ',iro);
    let colorPicker = new iro.ColorPicker("#color-picker-container", {
      borderWidth: 1,
      borderColor: "#ffffff",
      wheelAngle: -90,
      wheelDirection: "clockwise",
      width: 320,
      color: "#13e7c4",
      handleRadius: 12,
    });
    colorPicker.on("input:move",(changeValue)=>{
      //console.log("move -> ",changeValue.hexString);
    });
    colorPicker.on("input:end",(changeValue)=>{
      console.log("end -> ",changeValue.hexString);
    });
  }

}
