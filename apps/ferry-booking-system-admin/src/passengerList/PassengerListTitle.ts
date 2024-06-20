import { PassengerList as TPassengerList } from "../api/passengerList/PassengerList";

export const PASSENGERLIST_TITLE_FIELD = "passengerName";

export const PassengerListTitle = (record: TPassengerList): string => {
  return record.passengerName?.toString() || String(record.id);
};
