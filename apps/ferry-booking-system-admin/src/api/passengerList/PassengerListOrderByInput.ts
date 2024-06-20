import { SortOrder } from "../../util/SortOrder";

export type PassengerListOrderByInput = {
  bookingId?: SortOrder;
  createdAt?: SortOrder;
  ferry?: SortOrder;
  id?: SortOrder;
  passengerEmail?: SortOrder;
  passengerName?: SortOrder;
  travelDate?: SortOrder;
  updatedAt?: SortOrder;
};
