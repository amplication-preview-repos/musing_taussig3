import { Fleet as TFleet } from "../api/fleet/Fleet";

export const FLEET_TITLE_FIELD = "ferryName";

export const FleetTitle = (record: TFleet): string => {
  return record.ferryName?.toString() || String(record.id);
};
