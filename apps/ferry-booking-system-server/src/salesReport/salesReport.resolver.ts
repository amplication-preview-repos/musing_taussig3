import * as graphql from "@nestjs/graphql";
import { SalesReportResolverBase } from "./base/salesReport.resolver.base";
import { SalesReport } from "./base/SalesReport";
import { SalesReportService } from "./salesReport.service";

@graphql.Resolver(() => SalesReport)
export class SalesReportResolver extends SalesReportResolverBase {
  constructor(protected readonly service: SalesReportService) {
    super(service);
  }
}
