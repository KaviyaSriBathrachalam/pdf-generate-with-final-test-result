export class Quizmodel {

    qid :number;
    language:String;
    question:String;
    anslistobj:String[];
    answer:String;
    crctopt:String;
    constructor(  qid :number,language:String, question:String,
    anslistobj:String[], answer:String, crctopt:String) {
    this.qid=qid;
   this.language=language;
   this.anslistobj=anslistobj;
   this.answer=answer;
   this.crctopt=crctopt;
   }
   
   }
   export class Answermodel
   {
   question:String;
   option:String[];
   answer:String;
   choosen:String;
   anstype:String;

   constructor(question:String, option:String[], answer:String, choosen:String, anstype:String){
   this.question=question;
   this.option=option;
   this.answer=answer;
   this.choosen=choosen;
   this.anstype=anstype;

   
   }
   
   }
   
   
   