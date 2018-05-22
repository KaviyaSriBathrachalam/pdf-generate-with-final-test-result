import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-epdf',
  templateUrl: './epdf.component.html',
  styleUrls: ['./epdf.component.css']
})
export class EpdfComponent implements OnInit {
  name = 'Angular 5';
code = `
export model = new Model({
  a:1,
  b:function(){}
})
`
images = [{
    name: "Image 1", url:"https://image.shutterstock.com/image-photo/kiev-ukraine-april-20-2015-260nw-273231134.jpg"
  },
  {
    name:"Image 2",
    url:"assets/images/hellokitty.jpg"
  },
  {
    name:"Image 3",
    url:"assets/images/img_girl.jpg"
  }]

ngOnInit() {

}
getBase64Image(img) {
  var canvas = document.createElement("canvas");
  console.log("image");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL;
}

//var base64 = (document.getElementById("imageid"));
// download(){
//   let doc = new jsPDF();
//   for(var i=0;i<this.images.length;i++){
//    let imageData= this.getBase64Image(document.getElementById('img'+i));
//    console.log(imageData);
//      doc.addImage(imageData, "JPG", 10, (i+1)*10, 180, 150);
//      doc.addPage();
     
//   }
//   doc.save('Test.pdf');
// }

download(){
  let doc = new jsPDF();
  for(var i=0;i<this.images.length;i++){
   let imageData= this.getBase64Image(document.getElementById('img'+i));
   console.log(imageData);
     doc.addImage(imageData, "JPG", 10, (i+1)*10, 180, 150);
     doc.addPage();
     
  }
  doc.save('new.pdf');
}


}
