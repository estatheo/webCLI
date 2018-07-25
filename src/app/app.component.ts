import { Component, ViewChild, ElementRef, OnInit, AfterViewChecked, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('msgInput') private elementRef: ElementRef;
  @ViewChild('container') private container: ElementRef;

  messages = Array<{ id: number; value: string }>();

  ngOnInit() {
    this.elementRef.nativeElement.focus();
    this.messages.push({
      id: 0,
      value: 'Theodor Chichirita [Version 23.8.16]<br/>(c) 2018 Chichirita Corporations.All rights reserved.'
    });
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
            'Hi, my Name is Theodor Chichirita, and I\'m a software developer, what would you like to know? <br/><u>A</u>bout<br/><u>P</u>rojects<br/><u>M</u>ail<br/><u>L</u>inkedin<br/><u>G</u>ithub<br/><u>B</u>log' });
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
      case ( value.toLowerCase() === input.toLowerCase() + 'about' || value.toLowerCase() === input.toLowerCase() + 'a' ) : {
        this.messages.push({ id: this.messages.length, value:
            // tslint:disable-next-line:max-line-length
            'Software Engineer with a passion for everything tech.<br/>I draw cats in AR/VR and I build web applications for financial institutions.I have a passion for cybersecurity and devops methodologies with an eye to automation and site reliability<br/>Interested in cryptocurrencies and looking for blockchain opportunities.<br/>AI enthusiast and Quantum dreamer, playing around with everything that\'s new and shiny.<br/>Experienced in a various array of technologies from COBOLJCL to Angular6 and .NetCore2.1' });
        break;
      }
      case ( value.toLowerCase() === input.toLowerCase() + 'projects' || value.toLowerCase() === input.toLowerCase() + 'p' ) : {
        this.messages.push({
          id: this.messages.length,
          value: 'Work in progress (this UI (; )'
        });
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
    this.elementRef.nativeElement.value = '';
    window.scrollTo(0, this.container.nativeElement.scrollHeight);
  }
}
