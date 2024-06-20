import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SalesReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="reportDate" source="reportDate" />
        <NumberInput label="totalSales" source="totalSales" />
      </SimpleForm>
    </Create>
  );
};
