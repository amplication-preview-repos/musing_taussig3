import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FleetService } from "./fleet.service";
import { FleetControllerBase } from "./base/fleet.controller.base";

@swagger.ApiTags("fleets")
@common.Controller("fleets")
export class FleetController extends FleetControllerBase {
  constructor(protected readonly service: FleetService) {
    super(service);
  }
}
