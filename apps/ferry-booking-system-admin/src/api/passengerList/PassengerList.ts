import { Booking } from "../booking/Booking";

export type PassengerList = {
  booking?: Booking | null;
  createdAt: Date;
  ferry: string | null;
  id: string;
  passengerEmail: string | null;
  passengerName: string | null;
  travelDate: Date | null;
  updatedAt: Date;
};
