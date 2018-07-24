import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('msgInput') private elementRef: ElementRef;

  messages = Array<{ id: number; value: string }>();
  ngOnInit() {
    this.elementRef.nativeElement.focus();
  }

  appendMessage(value: string) {
    const input = 'C:\\Users\\Nine> ';
    this.messages.push({ id: this.messages.length, value: value });
    if (value === input + 'hello') {
      this.messages.push({
        id: this.messages.length,
        value:
          "Hi, my Name is Theodor Chichirita, and I'm a software developer, what are you looking for? <br/><u>A</u>bout<br/><u>M</u>ail<br/><u>L</u>inkedin"
      });
    }
    this.elementRef.nativeElement.value = '';
  }
}
