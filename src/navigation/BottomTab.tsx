import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ICONS, SHADOW} from '../resources';
import HomeNavigation from './HomeNavigation';

import { SIZES} from '../resources/Theme';
import LikeNavigation from './LikeNavigation';
import BagNavigation from './BagNavigation';
import SettingNavigation from './SettingNavigation';
import ProfileNavigation from './ProfileNavigation';
const TAB_HEIGHT = SIZES.height * 0.09;
const ICON_SIZE = SIZES.width * 0.06; 
const LABEL_SIZE = SIZES.width * 0.03;
function getIcons(routeName: string) {
  switch (routeName) {
    case 'Home':
      return ICONS.HOME_ICON;
    case 'Likes':
      return ICONS.LIKE_ICON;
    case 'Bag':
      return ICONS.BAG_ICON;
    case 'Profile':
      return ICONS.PROFILE_ICON;
    case 'Setting':
      return ICONS.SETTING_ICON;
    default:
      return ICONS.HOME_ICON;
  }
}
function MyTabBar({state, descriptors, navigation, keyboardVisible}: any) {
  // Don't render the tab bar if the keyboard is visible
  if (keyboardVisible) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.width * 0.08,
        height: TAB_HEIGHT,
        backgroundColor: COLORS.white,

     
      }}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={getIcons(label)}
                resizeMode="contain"
                style={{
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                  marginTop: 5,
                  tintColor: isFocused ? COLORS.primary : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: isFocused ? COLORS.primary : COLORS.black,
                  marginTop: 5,
                  // ...FONTS.body5,
                  fontSize: LABEL_SIZE,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // Ensure the tab bar is hidden when the keyboard is visible
        tabBarStyle: keyboardVisible ? {display: 'none'} : undefined,
      }}
      tabBar={(props: any) => (
        <MyTabBar {...props} keyboardVisible={keyboardVisible} />
      )}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Likes" component={LikeNavigation} />
      <Tab.Screen name="Bag" component={BagNavigation} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
      <Tab.Screen name="Setting" component={SettingNavigation} />
    </Tab.Navigator>
  );
}
