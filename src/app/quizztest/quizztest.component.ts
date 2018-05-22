import { Component, OnInit } from '@angular/core';
import { Quizmodel } from '../quiz/quizmodel';
import { Answermodel } from '../quiz/quizmodel';
import { Router } from '@angular/router';
import { QuizztestService } from './quizztest.service';

@Component({
  selector: 'app-quizztest',
  templateUrl: './quizztest.component.html',
  styleUrls: ['./quizztest.component.css']
})
export class QuizztestComponent implements OnInit {

  
 k:number;
  myarray:String[]=[];
  
  i: number = 0;
  catlist: String[] = ["java", "cprogram", "C++", "Spring", "Html", "Asp.net"];
  catstr: String;
  newstr:String;
  
constructor(private qs:QuizztestService, private myroute:Router){}
ngOnInit(){

}
 quizlist: Quizmodel[] = [{
    
    qid: 1, language: "java", question: "Inventor of c++?",
     anslistobj: ["Pavan.c", "James Gosling", "Richie Richie", "Amos.Emmanual"], answer:"Richie Richie", crctopt:"" 
  }
    ,

  {
    qid: 2, language: "java", question: "Inventor of java?",
     anslistobj:["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], answer:"Denish Richie",crctopt:"" 
},
  {
    qid: 3, language: "java", question: "how is java?", 
    anslistobj: ["Easy", "Difficult", "moderate", "nonoe"], answer:"Easy",crctopt:"" 
    },
     {
    qid: 4, language: "java", question: "why is java?", 
    anslistobj: ["Banjorone.Strostep", "James Gosling", "Mandrake.Naras", "Jos.kral"], answer:"James Gosling",crctopt:"" 
    }
,
     {
    qid: 5, language: "java", question: "when is java invented?", 
    anslistobj: ["1998", "2001", "2008", "1999"], answer:"1999",crctopt:"" 
    }
    ///cprogram
   ,{
    qid: 6, language: "cprogram", question: "Inventor of cprogram?",
     anslistobj: ["a", "b", "c", "d"], answer:"a",crctopt:"" 
  }
    ,

  {
    qid: 7, language: "cprogram", question: "Inventor of cprogram?", 
    anslistobj:["a", "b", "c", "d"], answer:"b",crctopt:"" 
},
  {
    qid: 8, language: "cprogram", question: "how is cprogram?",
     anslistobj: ["a", "b", "c", "d"], answer:"c",crctopt:"" 
    },
     {
    qid: 9, language: "cprogram", question: "why is cprogram?",
     anslistobj: ["a", "b", "c", "d"], answer:"d",crctopt:"" 
    }
,
     {
    qid: 10, language: "cprogram", question: "when is java cprogram?",
     anslistobj: ["a", "b", "c", "d"], answer:"a",crctopt:"" 
    }
    
];

////////////////////////////////////////////


question:String;
option:any[];
javaquiz:any[];
addquestions(){
  this.javaquiz=
  this.quizlist.filter(d=>(d.language==this.catstr));
  alert(JSON.stringify(this.javaquiz));
   this.question=this.javaquiz[this.i].question;
   this.option=this.javaquiz[this.i].anslistobj;
   
  this.k=this.javaquiz.length-1;
}

//////////////////////////////

next(){
  console.log()
    ++this.i;
     this.question=this.javaquiz[this.i].question;
     this.option=this.javaquiz[this.i].anslistobj;
     
}

//////////////////////////////////


previous(){
  --this.i;
   this.question=this.javaquiz[this.i].question;
     this.option=this.javaquiz[this.i].anslistobj;
     

}


//////////////////////////////////
answerkey:AnswerKey[]=[];

check(e, qid:number, answer:String){
  if(e.target.checked){
    console.log(qid+" "+answer);
   this.answerkey.push(new AnswerKey(qid,answer));
  }
  else{

    this.answerkey.splice(0,1);
  }
  console.log(this.answerkey);
  //  this.recursivecheck();
}
///////////////////////////////////

marks:number=0;
generatemark(){
var loop: Answermodel[] = [];
this.javaquiz.filter(s => {
 var ct = 0;
       this.answerkey.filter(d => {
        if (d.qid == s.qid) {
         ct++;

          if (d.choosen.toString() == s.answer.toString()) loop.push(new Answermodel(s.question, s.anslistobj, s.answer, d.choosen, "correct"));

          else loop.push(new Answermodel(s.question, s.anslistobj, s.answer,d.choosen, "incorrect"));
        }
      })
       if (ct == 0) {
        loop.push(new Answermodel(s.question, s.anslistobj, s.answer,"", "undefined"));
      }
    });
    console.log("Correct Answer:" + JSON.stringify(loop));
    this.qs.sendlist(loop);
  this.myroute.navigate(['quizz']);
//document.writeln("<html><body><table><tr><th></th></tr></table<>/body></html>");

}

///////////////////////////////////






}



export class AnswerKey{
  qid:number;
  choosen:String;
  
  constructor(qid:number, choosen:String){
    this.qid=qid;
    this.choosen=choosen;
    
  }



  

}