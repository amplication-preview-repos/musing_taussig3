import { SalesReport as TSalesReport } from "../api/salesReport/SalesReport";

export const SALESREPORT_TITLE_FIELD = "currency";

export const SalesReportTitle = (record: TSalesReport): string => {
  return record.currency?.toString() || String(record.id);
};
