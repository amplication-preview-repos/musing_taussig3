import * as graphql from "@nestjs/graphql";
import { PassengerListResolverBase } from "./base/passengerList.resolver.base";
import { PassengerList } from "./base/PassengerList";
import { PassengerListService } from "./passengerList.service";

@graphql.Resolver(() => PassengerList)
export class PassengerListResolver extends PassengerListResolverBase {
  constructor(protected readonly service: PassengerListService) {
    super(service);
  }
}
