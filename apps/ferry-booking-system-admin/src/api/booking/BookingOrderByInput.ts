import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  fleetId?: SortOrder;
  id?: SortOrder;
  numberOfPassengers?: SortOrder;
  status?: SortOrder;
  travelDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
