import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type PassengerListCreateInput = {
  booking?: BookingWhereUniqueInput | null;
  ferry?: string | null;
  passengerEmail?: string | null;
  passengerName?: string | null;
  travelDate?: Date | null;
};
