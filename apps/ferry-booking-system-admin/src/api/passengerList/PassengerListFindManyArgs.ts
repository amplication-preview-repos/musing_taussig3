import { PassengerListWhereInput } from "./PassengerListWhereInput";
import { PassengerListOrderByInput } from "./PassengerListOrderByInput";

export type PassengerListFindManyArgs = {
  where?: PassengerListWhereInput;
  orderBy?: Array<PassengerListOrderByInput>;
  skip?: number;
  take?: number;
};
