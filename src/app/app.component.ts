import { Component } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'efrat';

  hovers:any = {};

  is_active = false;

  ngAfterViewInit()	{
    var self = this;
    setTimeout(function() {
      self.is_active = true;
    },1000);
  }

  questions:any = {
    'munch':[
      {
        inner: {x: 68, y: 45},
        question:"מה מעשה האהבה של מאנץ שהכי ריגש את מתי?",
        clue:"בשעת לילה מאוחרת...",
        answer:"שמאנץ עלה למיטה באמצע הלילה, בזמן שמתי ישן, ליקק את מתי כמה פעמים ואז עשה איתו כפיות",
        tooltip:"שאלה על הלב של מאנץ",
      },
      {
        inner: {x: 73, y: 67},
        question:"...",
        clue:"...",
        answer:"...",
        tooltip:"n/a",
      },
      {
        inner: {x: 77, y: 53},
        question:"...",
        clue:"...",
        answer:"...",
        tooltip:"n/a",
      },
    ]
  }

  questionId = null;
  questionIndex = null;

  getScore() {
    var score = 0;
    for ( var key in this.questions ) {
      for ( var i = 0 ; i < this.questions[key].length ; i++ ) {
        if ( typeof(this.questions[key][i]['score']) != "undefined" )
          score += this.questions[key][i]['score'];
      }
    }

    return score;
  }

  enterQuestion(id:any,index:any) {
    this.questionId = id;
    this.questionIndex = index;
  }

  reset($event:Event) {
    if ( this.questionId )
      return;

    var id:any = null;

    if ( !$(<any>$event.target).is("svg") && $(<any>$event.target).closest("svg").length ) {
      id = $(<any>$event.target).closest("svg").attr("id");
    }

    if ( $(<any>$event.target).closest(".question").length ) {
      id = $(<any>$event.target).closest(".question").attr("data-id");
    }

    this.hovers = {};
    if ( id ) {
      this.hovers[id] = true;
    }
  }

  /*
  doSVGHover($event:Event,id:string) {
    if ( !$(<any>$event.target).is("svg") ) {
      this.hovers = {};
      this.hovers[id] = true;
    }
  }
   */

  getActiveId() {
    for ( var id in this.hovers )
      if ( this.hovers[id] )
        return id;
    return null;
  }
}
