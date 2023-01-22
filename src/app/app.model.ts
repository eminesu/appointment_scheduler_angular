import {CalendarEvent} from "angular-calendar";

export interface IPostBody{
  doctorName: string;
  appointmentList: CalendarEvent[];
}
