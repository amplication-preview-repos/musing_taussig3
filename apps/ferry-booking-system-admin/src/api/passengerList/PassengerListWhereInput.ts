import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PassengerListWhereInput = {
  booking?: BookingWhereUniqueInput;
  ferry?: StringNullableFilter;
  id?: StringFilter;
  passengerEmail?: StringNullableFilter;
  passengerName?: StringNullableFilter;
  travelDate?: DateTimeNullableFilter;
};
