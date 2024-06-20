import { FleetWhereInput } from "./FleetWhereInput";
import { FleetOrderByInput } from "./FleetOrderByInput";

export type FleetFindManyArgs = {
  where?: FleetWhereInput;
  orderBy?: Array<FleetOrderByInput>;
  skip?: number;
  take?: number;
};
