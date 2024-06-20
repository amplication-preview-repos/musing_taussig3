/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Booking } from "./Booking";
import { BookingCountArgs } from "./BookingCountArgs";
import { BookingFindManyArgs } from "./BookingFindManyArgs";
import { BookingFindUniqueArgs } from "./BookingFindUniqueArgs";
import { CreateBookingArgs } from "./CreateBookingArgs";
import { UpdateBookingArgs } from "./UpdateBookingArgs";
import { DeleteBookingArgs } from "./DeleteBookingArgs";
import { PassengerListFindManyArgs } from "../../passengerList/base/PassengerListFindManyArgs";
import { PassengerList } from "../../passengerList/base/PassengerList";
import { Fleet } from "../../fleet/base/Fleet";
import { User } from "../../user/base/User";
import { BookingService } from "../booking.service";
@graphql.Resolver(() => Booking)
export class BookingResolverBase {
  constructor(protected readonly service: BookingService) {}

  async _bookingsMeta(
    @graphql.Args() args: BookingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Booking])
  async bookings(
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    return this.service.bookings(args);
  }

  @graphql.Query(() => Booking, { nullable: true })
  async booking(
    @graphql.Args() args: BookingFindUniqueArgs
  ): Promise<Booking | null> {
    const result = await this.service.booking(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Booking)
  async createBooking(
    @graphql.Args() args: CreateBookingArgs
  ): Promise<Booking> {
    return await this.service.createBooking({
      ...args,
      data: {
        ...args.data,

        fleet: args.data.fleet
          ? {
              connect: args.data.fleet,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Booking)
  async updateBooking(
    @graphql.Args() args: UpdateBookingArgs
  ): Promise<Booking | null> {
    try {
      return await this.service.updateBooking({
        ...args,
        data: {
          ...args.data,

          fleet: args.data.fleet
            ? {
                connect: args.data.fleet,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Booking)
  async deleteBooking(
    @graphql.Args() args: DeleteBookingArgs
  ): Promise<Booking | null> {
    try {
      return await this.service.deleteBooking(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [PassengerList], { name: "passengerLists" })
  async findPassengerLists(
    @graphql.Parent() parent: Booking,
    @graphql.Args() args: PassengerListFindManyArgs
  ): Promise<PassengerList[]> {
    const results = await this.service.findPassengerLists(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Fleet, {
    nullable: true,
    name: "fleet",
  })
  async getFleet(@graphql.Parent() parent: Booking): Promise<Fleet | null> {
    const result = await this.service.getFleet(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Booking): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
