import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PassengerListService } from "./passengerList.service";
import { PassengerListControllerBase } from "./base/passengerList.controller.base";

@swagger.ApiTags("passengerLists")
@common.Controller("passengerLists")
export class PassengerListController extends PassengerListControllerBase {
  constructor(protected readonly service: PassengerListService) {
    super(service);
  }
}
