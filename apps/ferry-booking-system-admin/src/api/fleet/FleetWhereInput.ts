import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type FleetWhereInput = {
  arrivalLocation?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  capacity?: IntNullableFilter;
  departureLocation?: StringNullableFilter;
  ferryName?: StringNullableFilter;
  id?: StringFilter;
  schedule?: JsonFilter;
};
