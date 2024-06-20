import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesReportServiceBase } from "./base/salesReport.service.base";

@Injectable()
export class SalesReportService extends SalesReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
