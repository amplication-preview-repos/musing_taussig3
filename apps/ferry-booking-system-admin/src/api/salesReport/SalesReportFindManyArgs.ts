import { SalesReportWhereInput } from "./SalesReportWhereInput";
import { SalesReportOrderByInput } from "./SalesReportOrderByInput";

export type SalesReportFindManyArgs = {
  where?: SalesReportWhereInput;
  orderBy?: Array<SalesReportOrderByInput>;
  skip?: number;
  take?: number;
};
