import { Component, OnInit } from '@angular/core';
import {QuizztestService} from '../quizztest/quizztest.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private obj:QuizztestService) { }
  i:number=1;
  opt:number;
marks:number=0;
result:any[];
val:string;
  ngOnInit() {
 
    this.result=this.obj.value;
    console.log("quizz"+JSON.stringify(this.result));

this.result.filter(s=>{
if(s.answer==s.choosen)this.marks++;
});
  
// for (this.j = 0; this.j < val.data.length; this.j++) {
for(let v of this.result)
  {
    this.i=1;
  for(let w of v.option)
  {
   
  if(w ==v.answer)
  {
     this.opt=this.i;
    }
  else{
   this. i++;
  }
}
  
  if(this.opt==1)
  {
    v.crctopt="A";
  }
  if(this.opt==2)
  {
    v.crctopt="B";
  }
  if(this.opt==3)
  {
    v.crctopt="C";
  }
  if(this.opt==4)
  {
    v.crctopt='D';
  }
   }
 
  }
//   }
  

  // printPdf(){
  
  //   var doc = new jsPDF();
    
  //   doc.fromHTML(document.getElementById('printDiv'), 20, 20, {
  //     'width': 1000
  //   });
    
  //   doc.save('Test.pdf');
  // }

  printPdf(){       
    var elementToPrint = document.getElementById('printDiv');
    const pdf = new jsPDF(); 
    pdf.fromHTML(document.getElementById('printDiv'), 20, 20, {
          'width': 1000
        });
        pdf.save('new.pdf');
   

  }

}