/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import React from "react";
import Home from "./screen/Home";
import Modal from "./screen/Modal";
import store from "./config/stores";

EStyleSheet.build();

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
