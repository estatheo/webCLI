import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild('msgInput') private msgInput: ElementRef;
  @ViewChild('container') private tex: ElementRef;

  messages = Array<{ id: number; value: string }>();
  projectsShow = false;
  popUpImgSrc:string;
  popUpImgN;
  clock_tick;
  popUpImgSrcArray = [
    "../assets/cobol.png",
    "../assets/fiera.png",
    "../assets/cox.png",
    "../assets/fortress.png",
    "../assets/newday.png",
    "../assets/amido.png",
  ];
  ngOnInit() {
    this.msgInput.nativeElement.focus();
    this.messages.push({
      id: 0,
      value: 'Theodor Chichirita [Version 23.8.16]<br/>(c) 2018 Chichirita Corporations.All rights reserved.'
    });
    this.clock_tick = Date.now();
    this.popUpImgSrc =  "../assets/cobol.png";
    this.popUpImgN = 0;
  }
  ngAfterViewChecked() {
    this.msgInput.nativeElement.scrollIntoView();
  }
  appendMessage(value: string) {
    const input = 'C:\\Users\\root> ';
    this.messages.push({ id: this.messages.length, value: value });
    // alert(value.toLowerCase());
    // alert(input.toLowerCase() + 'hello');
    switch (true) {
      // tslint:disable-next-line:max-line-length
      case ( value.toLowerCase() === input.toLowerCase() + 'hello' || value.toLowerCase() === input.toLowerCase() + 'help' || value.toLowerCase() === input.toLowerCase() + 'start' || value.toLowerCase() === input.toLowerCase() + 'hi' || value.toLowerCase() === input.toLowerCase() + '.' ) : {
        this.messages.push({ id: this.messages.length, value:
            // tslint:disable-next-line:max-line-length
            'Hi, my Name is Theodor Chichirita, and I\'m a software engineer ☁ <br/><u>A</u>bout<br/><u>P</u>rojects<br/><u>M</u>ail<br/><u>L</u>inkedin<br/><u>G</u>ithub<br/><u>B</u>log' });
        break;
      }
      case ( value.toLowerCase() === input.toLowerCase() + 'linkedin' || value.toLowerCase() === input.toLowerCase() + 'l' ) : {
        this.messages.push({
          id: this.messages.length,
          value:
            '<a href="https://www.linkedin.com/in/theodor-chichirita-78770b140/">Theodor Chichirita</a>'
        });
        break;
      }
      case ( value.toLowerCase() === input.toLowerCase() + 'github' || value.toLowerCase() === input.toLowerCase() + 'g' ) : {
        this.messages.push({
          id: this.messages.length,
          value: '<a href="https://github.com/estatheo">Github</a>'
        });
        break;
      }
      case ( value.toLowerCase() === input.toLowerCase() + 'blog' || value.toLowerCase() === input.toLowerCase() + 'b' ) : {
        this.messages.push({
          id: this.messages.length,
          value:
            '<a href="https://medium.com/@theodor.chichirita">Medium</a>'
        });
        break;
      }
      case (value.toLowerCase() === input.toLowerCase() + 'mail' || value.toLowerCase() === input.toLowerCase() + 'm'): {
        this.messages.push({
          id: this.messages.length,
          value:
            '<a href="mailto:theodor.chichirita@gmail.com?Subject=Hello!">theodor.chichirita@gmail.com</a>'
        });
        break;
      }
      case ( value.toLowerCase() === input.toLowerCase() + 'about' || value.toLowerCase() === input.toLowerCase() + 'a' ) : {
        this.messages.push({ id: this.messages.length, value:
            // tslint:disable-next-line:max-line-length
            'Experienced Full Stack Developer with a demonstrated history of working in the software industry.<br/>Skilled in Product Development, Solution architect, Cloud and High transaction systems, User Experience.<br/>DevOps, DevSec and Performance Optimization. Strong engineering, professional mindset with lots of creativity and up to date with the latest technologies.' });
        break;
      }
      case ( value.toLowerCase() === input.toLowerCase() + 'projects' || value.toLowerCase() === input.toLowerCase() + 'p' ) : {
        // this.messages.push({
        //   id: this.messages.length,
        //   value: 'Work in progress (this UI (; )'
        // });
        this.popUpImgSrc = this.popUpImgSrcArray[0];
        this.clock_tick = Date.now();
        this.projectsShow = true;
        break;
      }
      case ( value.toLowerCase() === input.toLowerCase() + 'clear' || value.toLowerCase() === input.toLowerCase() + 'cls' ) : {
        this.messages = Array<{ id: number; value: string }>();
        this.messages.push({
          id: 0,
          value: 'Theodor Chichirita [Version 23.8.16]<br/>(c) 2018 Chichirita Corporations.All rights reserved.'
        });
      }
    }
    this.msgInput.nativeElement.value = '';
  }

  nextImg(){
    if(this.popUpImgN > 4){
      this.popUpImgN = 0;
      this.popUpImgSrc = this.popUpImgSrcArray[0];
      this.projectsShow = false;
    }
    else {
      this.popUpImgN++;
      this.popUpImgSrc = this.popUpImgSrcArray[this.popUpImgN];
    }
    this.clock_tick = Date.now();
  }
}
