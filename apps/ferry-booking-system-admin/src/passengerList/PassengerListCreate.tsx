import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const PassengerListCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="Ferry" source="ferry" />
        <TextInput
          label="passengerEmail"
          source="passengerEmail"
          type="email"
        />
        <TextInput label="passengerName" source="passengerName" />
        <DateTimeInput label="travelDate" source="travelDate" />
      </SimpleForm>
    </Create>
  );
};
