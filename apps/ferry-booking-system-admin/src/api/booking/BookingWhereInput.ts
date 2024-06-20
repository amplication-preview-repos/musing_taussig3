import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FleetWhereUniqueInput } from "../fleet/FleetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PassengerListListRelationFilter } from "../passengerList/PassengerListListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  fleet?: FleetWhereUniqueInput;
  id?: StringFilter;
  numberOfPassengers?: IntNullableFilter;
  passengerLists?: PassengerListListRelationFilter;
  status?: "Option1";
  travelDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
