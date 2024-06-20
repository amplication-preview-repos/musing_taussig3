import { Module } from "@nestjs/common";
import { PassengerListModuleBase } from "./base/passengerList.module.base";
import { PassengerListService } from "./passengerList.service";
import { PassengerListController } from "./passengerList.controller";
import { PassengerListResolver } from "./passengerList.resolver";

@Module({
  imports: [PassengerListModuleBase],
  controllers: [PassengerListController],
  providers: [PassengerListService, PassengerListResolver],
  exports: [PassengerListService],
})
export class PassengerListModule {}
