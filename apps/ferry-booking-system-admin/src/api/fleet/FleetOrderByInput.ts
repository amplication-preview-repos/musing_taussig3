import { SortOrder } from "../../util/SortOrder";

export type FleetOrderByInput = {
  arrivalLocation?: SortOrder;
  capacity?: SortOrder;
  createdAt?: SortOrder;
  departureLocation?: SortOrder;
  ferryName?: SortOrder;
  id?: SortOrder;
  schedule?: SortOrder;
  updatedAt?: SortOrder;
};
