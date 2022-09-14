import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Menu from "./pages/Menu";
import Widgets from "./pages/Widgets";
import Home from "./pages/Home";
import Midia from "./pages/Midia";
import Contribua from "./pages/Contribua";

const NavTabs = createBottomTabNavigator();

function Routes() {
  return (
    <NavTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black",
        },
      }}
    >
      <NavTabs.Screen name="Menu" component={Menu} />
      <NavTabs.Screen name="Widgets" component={Widgets} />
      <NavTabs.Screen name="Home" component={Home} />
      <NavTabs.Screen name="Midia" component={Midia} />
      <NavTabs.Screen name="Contribua" component={Contribua} />
    </NavTabs.Navigator>
  );
}

export default Routes;
