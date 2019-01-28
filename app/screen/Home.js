import React, { Component } from "react";
import { View, Modal, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";

import BaseCurrency from "../components/InputText/BaseCurrency";
import QuoteQurrency from "../components/InputText/QuoteCurrency";
import PopUp from "../components/PopUp";

//data
import currencies from "../data/currencies";

//importing action
import { getBaseCurrency, multiplyByItself } from "../action/baseCurrency";
import { getCurrencyList } from "../action/currenciesList";

class Home extends Component {
  state = {
    baseValue: 100,
    baseCurrency: "USD",
    quoteCurrency: "GBP",
    modalVisible: false
  };
  componentDidMount() {
    this.props.dispatch(
      getBaseCurrency(
        this.state.baseValue,
        this.state.baseCurrency,
        this.state.quoteCurrency
      )
    );
    this.props.dispatch(getCurrencyList());
  }

  sendRequest = ({ amount, base, quote }) => {
    //console.log(`${amount} on ${base} changed to ${quote}`);
    // console.log(amount);
    amount === ""
      ? this.props.dispatch(getBaseCurrency(1, base, quote))
      : this.props.dispatch(getBaseCurrency(amount, base, quote));

    if (!this.props.data) {
      console.log("null");
    } else {
      console.log(this.props.data.rates);
    }
  };

  multiply = ({ value }) => {
    this.props.dispatch(multiplyByItself(value));
  };

  baseValueOnChange = baseValue => {
    this.setState({ baseValue }, () => {
      this.sendRequest({
        amount: this.state.baseValue,
        base: this.state.baseCurrency,
        quote: this.state.quoteCurrency
      }),
        this.multiply({ value: this.state.baseValue });
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PopUp
          visibility={this.state.modalVisible}
          onPress={() => this.setState({ modalVisible: false })}
        />
        <BaseCurrency
          initialValue={this.state.baseValue}
          changeValue={baseValue => this.baseValueOnChange(baseValue)}
          currency={this.state.baseCurrency}
        />
        {!this.props.data || this.state.baseValue === "" ? (
          <QuoteQurrency
            initialValue="..."
            currency={this.state.quoteCurrency}
          />
        ) : (
          <QuoteQurrency
            initialValue={this.props.data.rates[this.state.quoteCurrency]}
            currency={this.state.quoteCurrency}
            onPress={() => this.setState({ modalVisible: true })}
          />
        )}
        <Text style={{ fontSize: 20 }}>{this.props.multiply}</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#99badd",
    flex: 1,
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    data: state.baseCurrency.data,
    reducer: state.currencyList.data,
    multiply: state.baseCurrency.value
  };
};

export default connect(mapStateToProps)(Home);
