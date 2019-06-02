import { Component } from '@angular/core';
import memo from 'memo-decorator';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
  public callPureMethodCount: number;
  public callMemoMethodCount: number;
  private timeList: [{ count: number, date: Date }];
  private dateCount = 1;

  constructor() {
    this.callPureMethodCount = 1;
    this.callMemoMethodCount = 1;
    this.timeList = [{count: this.dateCount++, date: new Date()}];

    this.startAddTime();
  }

  public getDateAndTime(): [{ count: number, date: Date }] {

    setTimeout(() => {
      this.callPureMethodCount++; 
    }, 0);

    console.log(`Call getDateAndTime ${this.callPureMethodCount} times.`);
    return this.timeList;
  }

  @memo()
  public getDateAndTimeWithMemo(): [{ count: number, date: Date }] {

    setTimeout(() => {
      this.callMemoMethodCount++; 
    }, 0);

    console.log(`Call getDateAndTimeWithMemo ${this.callMemoMethodCount} times.`);
    return this.timeList;
  }

  private startAddTime(): void {
    setInterval(() => {
      const now = new Date();

      this.timeList.unshift({ count: this.dateCount++, date: now });
    }, 1000);
  }
}