import React, { Component } from "react";
import { Modal, View, TouchableOpacity, FlatList, Text } from "react-native";
import { connect } from "react-redux";

//actions
import { changeQuoteCurrency } from "../../action/popUpActions";
import { clearData } from "../../action/baseCurrency";

const PopUp = props => {
  const { visibility, currenciesData, dispatch } = props;

  const panggil = item => {
    dispatch(changeQuoteCurrency(item));
    dispatch(clearData());
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visibility}>
      <View
        style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
      >
        <FlatList
          data={currenciesData}
          keyExtractor={index => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => panggil(item)}>
              <Text style={{ fontSize: 20 }}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

export default connect(null)(PopUp);
