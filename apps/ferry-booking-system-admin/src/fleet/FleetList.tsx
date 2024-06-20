import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FleetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Fleets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="arrivalLocation" source="arrivalLocation" />
        <TextField label="capacity" source="capacity" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="departureLocation" source="departureLocation" />
        <TextField label="ferryName" source="ferryName" />
        <TextField label="ID" source="id" />
        <TextField label="schedule" source="schedule" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
