// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

export const platform = Platform.OS;
//
export const kHEADERLANGUAGE = 'en_US';
export const kCLIENTVERSION = '1.2.1:' + platform;

export const baseUrl = 'https://www.io.pixelsoftwares.com';
// Used for async storage
export const storageKeys = {
  kACCESS_TOKEN: 'access_token',
  kREFRESH_TOKEN: 'refresh_token',
  kEMAIL: 'email',
  kPASSWORD: 'password',
  kPROFILE_IMAGE: 'profileImage',
  kPROFILE_DETAILS: 'profileDetails',
  kDEVICETOKEN: 'deviceToken',
};

export const EndPoints = {
  GET_ALL_PRODUCTS: '/task_api.php',
  GET_SINGLE_PRODUCT: '/task_api.php',
};

export default {
  platform,
  kHEADERLANGUAGE,
  kCLIENTVERSION,
  baseUrl,
  EndPoints,
};