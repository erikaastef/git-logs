/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      LogIn: {
        screens: {
          Username: 'user',
          Password: 'password',
        },
      },
      Repository: 'repository',
      Home: 'home',
      NotFound: '*',
    },
  },
};
