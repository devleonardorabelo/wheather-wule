import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

export type NavigationStack = {
  Home: undefined;
  Configuration: undefined;
};
export type HomeNavigationProps = StackNavigationProp<NavigationStack, 'Home'>;
export type HomeRouteProps = RouteProp<NavigationStack, 'Home'>;

export type ConfigurationNavigationProps = StackNavigationProp<
  NavigationStack,
  'Configuration'
>;
export type ConfigurationRouteProps = RouteProp<
  NavigationStack,
  'Configuration'
>;
export type HomeProps = {
  route: HomeRouteProps;
  navigation: HomeNavigationProps;
};
export type ConfigurationProps = {
  route: ConfigurationRouteProps;
  navigation: ConfigurationNavigationProps;
};
