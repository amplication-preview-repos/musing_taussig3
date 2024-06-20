import { SortOrder } from "../../util/SortOrder";

export type SalesReportOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  reportDate?: SortOrder;
  totalSales?: SortOrder;
  updatedAt?: SortOrder;
};
