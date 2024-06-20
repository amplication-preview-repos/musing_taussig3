import { Fleet } from "../fleet/Fleet";
import { PassengerList } from "../passengerList/PassengerList";
import { User } from "../user/User";

export type Booking = {
  bookingDate: Date | null;
  createdAt: Date;
  fleet?: Fleet | null;
  id: string;
  numberOfPassengers: number | null;
  passengerLists?: Array<PassengerList>;
  status?: "Option1" | null;
  travelDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
