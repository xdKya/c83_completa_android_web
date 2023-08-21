import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./tabNavigator";
import Profile from "../screens/profile";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Tela Inicial" component={BottomTabNavigator} />
        <Drawer.Screen name="Perfil" component={Profile} />
      </Drawer.Navigator>
    );
  }
}
