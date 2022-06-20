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

  zoom = 1;

  ngAfterViewInit()	{
    var self = this;
    setTimeout(function() {
      self.is_active = true;
    },1000);
  }

  questions:any = {
    'mati':[
      {
        inner: {x: 35, y: 33},
        question:"מה הצבע מגרד הראש של מתי?",
        clue:"זה גם הצבע האהוב על מתי, וזה שהכי מחמיא לו...",
        answer:"כחול",
        tooltip:"שאלה על תכשירים אישיים",
      },
      {
        inner: {x: 32, y: 53},
        question:"אם מתי היה משחק בסרט ערפדים קיים, בתור איזו דמות?",
        clue:"איך מתי מתמודד עם חרדה?",
        answer:"קולומבוס מהסרט זומבילנד",
        tooltip:"שאלה על היותו סלב פוטנציאלי",
      },
      {
        inner: {x: 23, y: 71},
        question:"מה משותף למתי, בון גובי. פני צלקת ופלאש דאנס?",
        clue:"פלאש דאנס זה כזה 80s",
        answer:"כולם נוסדו ב 1983",
        tooltip:"שאלה על מה באמת חשוב בעולם",
      },
      {
        inner: {x: 34, y: 43},
        question:"לגבי איזה משפחת מאכלים, גם מתי וגם אפרת יעופו על איכות מקסימלית?",
        clue:"תפתחי חלון",
        answer:"גבינות",
        tooltip:"שאלה על איכות קולינרית",
      },
      {
        inner: {x: 36, y: 61},
        question:"לאיזו מילה אפשר להגיע מ m.a.t.i.s.k.i.b.a?",
        clue:"אין לי מושג :)",
        answer:"https://word.tips/unscramble/matiskiba/",
        tooltip:"החידתיות שבמתי",
      },
    ],
    'efrat':[
      {
        inner: {x: 10, y: 84},
        question:"מה משותף לאפרת, כריס פראט, לנה דל ריי והנסיך וויליאם?",
        clue:"ברכו את היום הזה, בו המלך נולך",
        answer:"כולם חולקים את אותו תאריך יום ההולדת",
        tooltip:"שאלה על מזל בחיים",
      },
      {
        inner: {x: 23, y: 50},
        question:"מה משותף לאפרת, אבן, שקר?",
        clue:"הייתי אומר שהחוזקה של אפרת היא בלשון העברית",
        answer:"חן",
        tooltip:"שאלה על סמיכות",
      },
      {
        inner: {x: 17, y: 65},
        question:"למה זה מסורתי שלאפרת יהיה כלב זכר וחצר קטנה?",
        clue:"פעם ראשונה נתקלתי בשם אפרת באיזה ספר. בעזרת השם תגיעי לתשובה",
        answer:"כי בתנ\"ך היא אשתו של כלב בן חצרון",
        tooltip:"שאלה על מסורת",
      },
      {
        inner: {x: 6, y: 90},
        question:"מה הדרך הכי דיאטתית למנוע הריון?",
        clue:"יסוד המעלה, מקור הידע",
        answer:"קולה זירו",
        tooltip:"שאלה על אחריות",
      },
      {
        inner: {x: 28, y: 52},
        question:"לאיזו מילה אפשר להגיע מ e.f.r.a.t.h.e.n.n?",
        clue:"אין לי מושג :)",
        answer:"https://word.tips/unscramble/efrathenn/",
        tooltip:"החידתיות שבאפרת",
      },
    ],
    'stone':[
      {
        inner: {x: 90, y: 80},
        question:"מה משותף לקפמאנץ, עין הדייג, חוף החזירים?",
        clue:"בקפמאנץ התגשם למתי חלום. נ.ב. הוא לא אכל תפוח כי אסור",
        answer:"בכולם יש חיה מייצגת מפורסמת",
        tooltip:"שאלה על מקומות יוצאי דופן",
      },
      {
        inner: {x: 81, y: 75},
        question:"איפה קיבלנו פעם ראשונה הצצה לאהבה שלנו?",
        clue:"לא היה צריך איפור, לא מסקרה, לא קונסילר ולא ...",
        answer:"יער אודם. בקמפינג הקסום שלנו",
        tooltip:"שאלה על טבע מרגש",
      },
      {
        inner: {x: 64, y: 83},
        question:"איזו 2 מדינות מתי ואפרת חייבים לבקר?",
        clue:"כי למתי ואפרת קל לקבל החלטות",
        answer:"קרואטיה וסלובניה",
        tooltip:"שאלה על לוגיקה טיולית",
      },
      {
        inner: {x: 47, y: 84},
        question:"איפה מתי חווה ממש ממש לאט עד כמה אפרת אשה מגניבה?",
        clue:"ממש ממש ממש ממש ממש לאט. ויש לזה תיעוד",
        answer:"בקפיצה בבניאס. כשאפרת קפצה מהעץ",
        tooltip:"שאלה על הרפתקאות בטבע",
      },
      {
        inner: {x: 70, y: 90},
        question:"איזה חוף מתי רואה כשהוא מסתכל בעיניים של אפרת?",
        clue:"a possible efrat meltdown",
        answer:"חוף אפרת בדרך לחיפה",
        tooltip:"שאלה על חיבור גוף/טבע",
      },
      ],
    'munch':[
      {
        inner: {x: 66, y: 56},
        question:"מה מעשה האהבה של מאנץ שהכי ריגש את מתי?",
        clue:"בשעת לילה מאוחרת...",
        answer:"שמאנץ עלה למיטה באמצע הלילה, בזמן שמתי ישן, ליקק את מתי כמה פעמים ואז עשה איתו כפיות",
        tooltip:"שאלה על הלב של מאנץ",
      },
      {
        inner: {x: 65, y: 36},
        question:"מה משותף למאנץ, לוטרות ים ואליגטורים?",
        clue:"יש את אלו שהטבע הוא מגרש המשחקים שלהם",
        answer:"שימוש באבנים",
        tooltip:"שאלה על הנעורים של מאנץ",
      },
      {
        inner: {x: 90, y: 54},
        question:"מאנץ ברח לאכול, כמה צעדים אפרת צריכה לעשות כדי להחזיר אותו?",
        clue:"מהדלת לקצה של המטבח זה 18 צעדים",
        answer:"125",
        tooltip:"שאלה על התשוקה של מאנץ",
      },
      {
        inner: {x: 93, y: 39},
        question:"אם יגיע טורנדו ויעיף את מאנץ, לאן הוא יגיע?",
        clue:"there no place... ( so wicked :)",
        answer:"הביתה, לארץ עוץ",
        tooltip:"שאלה על אודותיו",
      },
      {
        inner: {x: 58, y: 43},
        question:"לאיזו מילה אפשר להגיע מ m.u.n.c.h.i.d.o.o?",
        clue:"אין לי מושג :)",
        answer:"https://word.tips/unscramble/munchidoo/",
        tooltip:"החידתיות שבמאנץ",
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
