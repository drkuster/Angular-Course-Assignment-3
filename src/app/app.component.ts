import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  showParagraph = false;
  buttonClickCount = 0;
  buttonClicks = [];
  timeStamps = [];

  onButtonClick(): void
  {
    this.showParagraph = !this.showParagraph;
    this.buttonClickCount++; this.buttonClicks.push(this.buttonClickCount);
    this.timeStamps.push(moment().format('hh:mm:ss'));
  }
}
