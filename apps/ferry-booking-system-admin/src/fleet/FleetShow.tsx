import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FLEET_TITLE_FIELD } from "./FleetTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FleetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="arrivalLocation" source="arrivalLocation" />
        <TextField label="capacity" source="capacity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="departureLocation" source="departureLocation" />
        <TextField label="ferryName" source="ferryName" />
        <TextField label="ID" source="id" />
        <TextField label="schedule" source="schedule" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="fleetId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="bookingDate" source="bookingDate" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Fleet" source="fleet.id" reference="Fleet">
              <TextField source={FLEET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="numberOfPassengers" source="numberOfPassengers" />
            <TextField label="status" source="status" />
            <TextField label="travelDate" source="travelDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
