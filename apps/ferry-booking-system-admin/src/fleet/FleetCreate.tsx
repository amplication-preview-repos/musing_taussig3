import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const FleetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="arrivalLocation" source="arrivalLocation" />
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="departureLocation" source="departureLocation" />
        <TextInput label="ferryName" source="ferryName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
