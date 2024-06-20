import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SalesReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="reportDate" source="reportDate" />
        <NumberInput label="totalSales" source="totalSales" />
      </SimpleForm>
    </Edit>
  );
};
