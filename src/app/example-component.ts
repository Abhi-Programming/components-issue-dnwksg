import { Component } from '@angular/core';
import {
  DateRange,
  MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
} from '@angular/material/datepicker';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
  providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER],
})
export class ExampleComponent {
  sampleRange: DateRange<Date>;
  clickCnt: number = 0;
  constructor() {
    this.refreshDR();
  }
  refreshDR() {
    this.sampleRange = new DateRange(
      (() => {
        let v = new Date();
        v.setDate(v.getDate());
        return v;
      })(),
      new Date()
    );
  }

  firstDate: any;
  secondDate: any;

  onChange(ev: any) {
    this.clickCnt += 1;

    if (this.clickCnt == 1) {
      this.firstDate = ev;

      this.sampleRange = new DateRange(
        (() => {
          let v = this.firstDate;
          v.setDate(v.getDate());
          return v;
        })(),
        this.firstDate
      );
    }

    if (this.clickCnt == 2) {
      this.secondDate = ev;

      this.sampleRange = new DateRange(
        (() => {
          let v = this.firstDate;
          v.setDate(v.getDate());
          return v;
        })(),
        ev
      );

      this.clickCnt = 0

    }

 
    console.log(this.sampleRange);

  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
