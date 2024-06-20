import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FleetServiceBase } from "./base/fleet.service.base";

@Injectable()
export class FleetService extends FleetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
