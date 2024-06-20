import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesReportService } from "./salesReport.service";
import { SalesReportControllerBase } from "./base/salesReport.controller.base";

@swagger.ApiTags("salesReports")
@common.Controller("salesReports")
export class SalesReportController extends SalesReportControllerBase {
  constructor(protected readonly service: SalesReportService) {
    super(service);
  }
}
