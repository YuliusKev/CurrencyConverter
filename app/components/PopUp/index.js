import React, { Component } from "react";
import { Modal, View, TouchableOpacity } from "react-native";

const PopUp = ({ visibility, currencies, onPress }) => {
  let modalVisible = visibility;

  const lel = ({ visibility }) => {
    modalVisible = visibility;
    console.log(modalVisible);
  };
  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View
        style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={{ height: 30, backgroundColor: "red" }}
          onPress={onPress}
        />
      </View>
    </Modal>
  );
};

export default PopUp;
