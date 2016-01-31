/**
 * https://github.com/facebook/react-native/blob/master/Libraries/react-native/react-native.js
 */
import React from 'react';

import createMockComponent from './components/createMockComponent';

// Export React, plus some native additions.
const ReactNative = {
  // Components
  ActivityIndicatorIOS: createMockComponent('ActivityIndicatorIOS'),
  ART: require('./components/ART'),
  DatePickerIOS: createMockComponent('DatePickerIOS'),
  DrawerLayoutAndroid: createMockComponent('DrawerLayoutAndroid'),
  Image: require('./components/Image'),
  ImageEditor: createMockComponent('ImageEditor'),
  ImageStore: createMockComponent('ImageStore'),
  ListView: createMockComponent('ListView'),
  MapView: createMockComponent('MapView'),
  Modal: createMockComponent('Modal'),
  Navigator: createMockComponent('Navigator'),
  NavigatorIOS: createMockComponent('NavigatorIOS'),
  Picker: createMockComponent('Picker'),
  PickerIOS: createMockComponent('PickerIOS'),
  ProgressBarAndroid: createMockComponent('ProgressBarAndroid'),
  ProgressViewIOS: createMockComponent('ProgressViewIOS'),
  ScrollView: createMockComponent('ScrollView'),
  SegmentedControlIOS: createMockComponent('SegmentedControlIOS'),
  SliderIOS: createMockComponent('SliderIOS'),
  SnapshotViewIOS: createMockComponent('SnapshotViewIOS'),
  Switch: createMockComponent('Switch'),
  PullToRefreshViewAndroid: createMockComponent('PullToRefreshViewAndroid'),
  RecyclerViewBackedScrollView: createMockComponent('RecyclerViewBackedScrollView'),
  RefreshControl: createMockComponent('RefreshControl'),
  SwitchAndroid: createMockComponent('SwitchAndroid'),
  SwitchIOS: createMockComponent('SwitchIOS'),
  TabBarIOS: createMockComponent('TabBarIOS'),
  Text: require('./components/Text'),
  TextInput: createMockComponent('TextInput'),
  ToastAndroid: createMockComponent('ToastAndroid'),
  ToolbarAndroid: createMockComponent('ToolbarAndroid'),
  Touchable: createMockComponent('Touchable'),
  TouchableHighlight: createMockComponent('TouchableHighlight'),
  TouchableNativeFeedback: createMockComponent('TouchableNativeFeedback'),
  TouchableOpacity: createMockComponent('TouchableOpacity'),
  TouchableWithoutFeedback: createMockComponent('TouchableWithoutFeedback'),
  View: require('./components/View'),
  ViewPagerAndroid: createMockComponent('ViewPagerAndroid'),
  WebView: createMockComponent('WebView'),

  // APIs
  //ActionSheetIOS: require('ActionSheetIOS'),
  //AdSupportIOS: require('AdSupportIOS'),
  Alert: require('./api/Alert'),
  //AlertIOS: require('AlertIOS'),
  Animated: require('./api/Animated'),
  AppRegistry: require('./api/AppRegistry'),
  AppState: require('./api/AppState'),
  //AppStateIOS: require('AppStateIOS'),
  AsyncStorage: require('./api/AsyncStorage'),
  //BackAndroid: require('BackAndroid'),
  CameraRoll: require('./api/CameraRoll'),
  Clipboard: require('./plugins/NativeModules/Clipboard'),
  //DatePickerAndroid: require('DatePickerAndroid'),
  Dimensions: require('./api/Dimensions'),
  Easing: require('./api/Animated/Easing'),
  //ImagePickerIOS: require('ImagePickerIOS'),
  //IntentAndroid: require('IntentAndroid'),
  InteractionManager: require('./api/InteractionManager'),
  LayoutAnimation: require('./api/LayoutAnimation'),
  Linking: require('./api/Linking'),
  //LinkingIOS: require('LinkingIOS'),
  NetInfo: require('./api/NetInfo'),
  PanResponder: require('./api/PanResponder'),
  PixelRatio: require('./api/PixelRatio'),
  //PushNotificationIOS: require('PushNotificationIOS'),
  Settings: require('./api/Settings'),
  //StatusBarIOS: require('StatusBarIOS'),
  StyleSheet: require('./api/StyleSheet'),
  //TimePickerAndroid: require('TimePickerAndroid'),
  UIManager: require('./plugins/NativeModules/UIManager'),
  //VibrationIOS: require('VibrationIOS'),

  // Plugins
  DeviceEventEmitter: require('./plugins/DeviceEventEmitter'),
  NativeAppEventEmitter: require('./plugins/NativeAppEventEmitter'),
  NativeModules: require('./plugins/NativeModules'),
  Platform: require('./plugins/Platform'),
  processColor: require('./plugins/processColor'),
  requireNativeComponent: require('./plugins/requireNativeComponent'),

  // Prop Types
  ColorPropType: require('./propTypes/ColorPropType'),
  EdgeInsetsPropType: require('./propTypes/EdgeInsetsPropType'),
  PointPropType: require('./propTypes/PointPropType'),
};

// See http://facebook.github.io/react/docs/addons.html
const ReactNativeAddons = {
  LinkedStateMixin: require('react-addons-linked-state-mixin'),
  Perf: require('react-addons-perf'),
  PureRenderMixin: require('react-addons-pure-render-mixin'),
  TestModule: require('./plugins/NativeModules/TestModule'),
  TestUtils: require('react-addons-test-utils'),
  //batchedUpdates: require('ReactUpdates').batchedUpdates,
  cloneWithProps: require('react-addons-clone-with-props'),
  createFragment: require('react-addons-create-fragment'),
  update: require('react-addons-update'),
};

Object.assign(ReactNative, React, { addons: ReactNativeAddons });

module.exports = React;