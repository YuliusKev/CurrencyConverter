import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Text
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const QuoteCurrency = ({ initialValue, currency, onPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={initialValue.toString()}
        style={styles.textInput}
        keyboardType="number-pad"
        returnKeyType="done"
        editable={false}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ paddingLeft: 20 }}>{currency}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#c4c8ce",
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

export default QuoteCurrency;
