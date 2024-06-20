import { Module } from "@nestjs/common";
import { FleetModuleBase } from "./base/fleet.module.base";
import { FleetService } from "./fleet.service";
import { FleetController } from "./fleet.controller";
import { FleetResolver } from "./fleet.resolver";

@Module({
  imports: [FleetModuleBase],
  controllers: [FleetController],
  providers: [FleetService, FleetResolver],
  exports: [FleetService],
})
export class FleetModule {}
