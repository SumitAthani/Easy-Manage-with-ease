import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddExpenditureScreen from "../screens/AddExpenditureScreen";
import DisplayExpendituresScreen from "../screens/DisplayExpendituresScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddExpenditureButton from "./AddExpenditureButton";
import routes from "./routes";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={DisplayExpendituresScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Add"
      component={AddExpenditureScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddExpenditureButton
            onPress={() => {
              navigation.navigate(routes.ADD_EXPENDITURE);
            }}
          />
        ),

        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
