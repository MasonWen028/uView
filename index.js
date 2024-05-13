/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import exp from './src/pages/exp';
import color from './src/pages/Colors';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => exp);
