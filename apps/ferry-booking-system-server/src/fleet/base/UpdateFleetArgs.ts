/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FleetWhereUniqueInput } from "./FleetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FleetUpdateInput } from "./FleetUpdateInput";

@ArgsType()
class UpdateFleetArgs {
  @ApiProperty({
    required: true,
    type: () => FleetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FleetWhereUniqueInput)
  @Field(() => FleetWhereUniqueInput, { nullable: false })
  where!: FleetWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FleetUpdateInput,
  })
  @ValidateNested()
  @Type(() => FleetUpdateInput)
  @Field(() => FleetUpdateInput, { nullable: false })
  data!: FleetUpdateInput;
}

export { UpdateFleetArgs as UpdateFleetArgs };
