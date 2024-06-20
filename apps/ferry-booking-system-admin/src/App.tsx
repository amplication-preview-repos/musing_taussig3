import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { FleetList } from "./fleet/FleetList";
import { FleetCreate } from "./fleet/FleetCreate";
import { FleetEdit } from "./fleet/FleetEdit";
import { FleetShow } from "./fleet/FleetShow";
import { SalesReportList } from "./salesReport/SalesReportList";
import { SalesReportCreate } from "./salesReport/SalesReportCreate";
import { SalesReportEdit } from "./salesReport/SalesReportEdit";
import { SalesReportShow } from "./salesReport/SalesReportShow";
import { PassengerListList } from "./passengerList/PassengerListList";
import { PassengerListCreate } from "./passengerList/PassengerListCreate";
import { PassengerListEdit } from "./passengerList/PassengerListEdit";
import { PassengerListShow } from "./passengerList/PassengerListShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FerryBookingSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Fleet"
          list={FleetList}
          edit={FleetEdit}
          create={FleetCreate}
          show={FleetShow}
        />
        <Resource
          name="SalesReport"
          list={SalesReportList}
          edit={SalesReportEdit}
          create={SalesReportCreate}
          show={SalesReportShow}
        />
        <Resource
          name="PassengerList"
          list={PassengerListList}
          edit={PassengerListEdit}
          create={PassengerListCreate}
          show={PassengerListShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
