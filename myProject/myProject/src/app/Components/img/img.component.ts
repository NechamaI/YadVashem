import { Component, Input } from '@angular/core';
import { MySerService } from '../../Service/my-ser.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
 
  imgsList:any[]=[];
  
  constructor(private myServe:MySerService){}
 
  
  //שליפת הנתונים שנשמרו בסרבר
  //ומיון הנתונים לפי קבצים ותקיות
  ngOnInit(){
    for (let i = 0; i < this.myServe.node?.children.length; i++) {
      const element = this.myServe.node.children[i];
      if(element.type!="folder")
         this.imgsList.push(element);
    
    }
  }

@Input() thisNode:any;
//פונקציה להגדלת תמונה -לא מומש
  itsBig:boolean=false;
  makeBig(){
    this.itsBig=true;
  }

}
