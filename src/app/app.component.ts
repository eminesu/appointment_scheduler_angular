import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('popupAppointmentConfirmation') public popupAppointmentConfirmation!: TemplateRef<any>;
  public title: string = 'appointment_scheduler';
  public viewDate: Date = new Date();
  public view: CalendarView = CalendarView.Week;
  public CalendarView1 = CalendarView.Week;
  public CalendarView2 = CalendarView.Week;
  public events: CalendarEvent[] = [];
  public events1: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First Doctor'
    }
  ]

  public events2: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: new Date(),
      title: 'Second Doctor'
    }
  ]

  constructor (private dialog: MatDialog) {
  }

  public setView (view: CalendarView, key: string): void {
    this.view = view;
    if (key === 'one') {
      this.events = this.events1;
    } else {
      this.events = this.events2;
    }
  }

  public segmentClicked (date: Date): void {
    this.dialog.open(this.popupAppointmentConfirmation);
  }

  public close(): void {
    this.dialog.closeAll();
  }
}
