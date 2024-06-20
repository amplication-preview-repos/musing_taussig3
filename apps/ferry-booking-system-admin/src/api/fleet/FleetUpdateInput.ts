import { BookingUpdateManyWithoutFleetsInput } from "./BookingUpdateManyWithoutFleetsInput";
import { InputJsonValue } from "../../types";

export type FleetUpdateInput = {
  arrivalLocation?: string | null;
  bookings?: BookingUpdateManyWithoutFleetsInput;
  capacity?: number | null;
  departureLocation?: string | null;
  ferryName?: string | null;
  schedule?: InputJsonValue;
};
