import { FleetWhereUniqueInput } from "../fleet/FleetWhereUniqueInput";
import { PassengerListCreateNestedManyWithoutBookingsInput } from "./PassengerListCreateNestedManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  fleet?: FleetWhereUniqueInput | null;
  numberOfPassengers?: number | null;
  passengerLists?: PassengerListCreateNestedManyWithoutBookingsInput;
  status?: "Option1" | null;
  travelDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
