import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PassengerListServiceBase } from "./base/passengerList.service.base";

@Injectable()
export class PassengerListService extends PassengerListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
