import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  white: '#fff',
  black: '#000000',
  primary: '#A7BE5A',
  secondary: '#657C00',
  Cyan:"#BAC3C3",
  gray: '#716C6C',
  yellow:"#F5C900",
 heading:"#333131",
 filledStar:"#F1904F",
 unfilledStar:"#AD9C92",
black2:"#161616",
lightGray:"#E0E0E0",

};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h0:25,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,

  // app dimensions
  width,
  height,
};

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 1.84,
  elevation: 1,
};

export const SHADOW_RIGHT = {
  shadowColor: '#000', // Shadow color
  shadowOffset: {
    width: 5, // Positive value to move shadow to the right
    height: 0, // No vertical shadow
  },
  shadowOpacity: 0.3, // Opacity of the shadow
  shadowRadius: 3, // Blurriness of the shadow
  elevation: 5, // For Android, creates shadow depth
};

export const SHADOW_BOTTOM_TAB = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 1.84,
  elevation: 10,
};
export const SHADOW_BLUE = {
  shadowColor: COLORS.primary,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,

};
export const FONTS = {
  h1: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h1, lineHeight: 36},
  h0: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h0, lineHeight: 34},
  h2: {fontFamily: 'Poppins-Medium', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Medium', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 22},
  body6: {fontFamily: 'Poppins-Light', fontSize: SIZES.body6, lineHeight: 18},
};

const appTheme = {
  COLORS,
  SIZES,
  FONTS,
  SHADOW,
  SHADOW_BLUE,
  SHADOW_BOTTOM_TAB,
  SHADOW_RIGHT,
};

export default appTheme;