import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";

export type Fleet = {
  arrivalLocation: string | null;
  bookings?: Array<Booking>;
  capacity: number | null;
  createdAt: Date;
  departureLocation: string | null;
  ferryName: string | null;
  id: string;
  schedule: JsonValue;
  updatedAt: Date;
};
