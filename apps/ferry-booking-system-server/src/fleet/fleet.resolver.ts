import * as graphql from "@nestjs/graphql";
import { FleetResolverBase } from "./base/fleet.resolver.base";
import { Fleet } from "./base/Fleet";
import { FleetService } from "./fleet.service";

@graphql.Resolver(() => Fleet)
export class FleetResolver extends FleetResolverBase {
  constructor(protected readonly service: FleetService) {
    super(service);
  }
}
