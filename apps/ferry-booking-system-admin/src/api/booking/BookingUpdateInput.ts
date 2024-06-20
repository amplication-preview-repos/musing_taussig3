import { FleetWhereUniqueInput } from "../fleet/FleetWhereUniqueInput";
import { PassengerListUpdateManyWithoutBookingsInput } from "./PassengerListUpdateManyWithoutBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  fleet?: FleetWhereUniqueInput | null;
  numberOfPassengers?: number | null;
  passengerLists?: PassengerListUpdateManyWithoutBookingsInput;
  status?: "Option1" | null;
  travelDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
