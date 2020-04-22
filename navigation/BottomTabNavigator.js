import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import QRCodeScannerScreen from '../screens/QRCodeScannerScreen';
import ShoppingMapScreen from '../screens/ShoppingMapScreen';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import HomeScreen from '../screens/HomeScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Store',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="QRCodeScanner"
        component={QRCodeScannerScreen}
        options={{
          title: 'QR Code',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-qr-scanner" />,
        }}
      />
       <BottomTab.Screen
        name="ShoppingMap"
        component={ShoppingMapScreen}
        options={{
          title: 'Shopping Map',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-map" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Links':
      return 'Fájate';
    case 'QRCodeScanner':
      return 'QR code scanner';
    case 'ShoppingMap':
      return 'Stores';
  }
}
