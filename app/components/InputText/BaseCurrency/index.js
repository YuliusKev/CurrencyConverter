import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Text
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const BaseCurrency = ({
  initialValue,
  changeValue,
  currency,
  sendRequest,
  onPress
}) => (
  <View style={styles.container}>
    <TextInput
      value={initialValue.toString()}
      style={styles.textInput}
      placeholder="Base Currencry"
      keyboardType="number-pad"
      returnKeyType="done"
      onChangeText={changeValue}
      onSubmitEditing={sendRequest}
    />
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ paddingLeft: 20 }}>{currency}</Text>
    </TouchableOpacity>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    marginBottom: 10
  },
  textInput: {
    height: 50,
    marginLeft: 5,
    width: Dimensions.get("window").width - 80
  },
  button: {
    backgroundColor: "#ccd4e2",
    width: 71,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center"
  }
});

export default BaseCurrency;
