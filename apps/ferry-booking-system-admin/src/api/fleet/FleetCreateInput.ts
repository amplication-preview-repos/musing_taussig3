import { BookingCreateNestedManyWithoutFleetsInput } from "./BookingCreateNestedManyWithoutFleetsInput";
import { InputJsonValue } from "../../types";

export type FleetCreateInput = {
  arrivalLocation?: string | null;
  bookings?: BookingCreateNestedManyWithoutFleetsInput;
  capacity?: number | null;
  departureLocation?: string | null;
  ferryName?: string | null;
  schedule?: InputJsonValue;
};
