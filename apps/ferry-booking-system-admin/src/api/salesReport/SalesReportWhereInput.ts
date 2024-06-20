import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SalesReportWhereInput = {
  currency?: StringNullableFilter;
  id?: StringFilter;
  reportDate?: DateTimeNullableFilter;
  totalSales?: FloatNullableFilter;
};
