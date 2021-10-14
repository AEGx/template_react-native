import { Dimensions } from 'react-native';
import { StatusBar } from 'react-native';

export const Layout = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    StatusBarHeight: StatusBar.currentHeight,
};
