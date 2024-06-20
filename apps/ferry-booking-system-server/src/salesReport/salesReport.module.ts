import { Module } from "@nestjs/common";
import { SalesReportModuleBase } from "./base/salesReport.module.base";
import { SalesReportService } from "./salesReport.service";
import { SalesReportController } from "./salesReport.controller";
import { SalesReportResolver } from "./salesReport.resolver";

@Module({
  imports: [SalesReportModuleBase],
  controllers: [SalesReportController],
  providers: [SalesReportService, SalesReportResolver],
  exports: [SalesReportService],
})
export class SalesReportModule {}
