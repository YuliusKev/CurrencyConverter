import React, { Component } from "react";
import { View, Modal, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { connect } from "react-redux";

import BaseCurrency from "../components/InputText/BaseCurrency";
import QuoteQurrency from "../components/InputText/QuoteCurrency";
import PopUp from "../components/PopUp";

//importing action
import {
  getBaseCurrency,
  multiplyByItself,
  clearData
} from "../action/baseCurrency";
import { getCurrencyList } from "../action/currenciesList";
import { changeVisibility } from "../action/popUpActions";

class Home extends Component {
  state = {
    baseValue: 100,
    baseCurrency: "USD",
    modalVisible: false
  };
  componentDidMount() {
    this.props.dispatch(
      getBaseCurrency(
        this.state.baseValue,
        this.state.baseCurrency,
        this.props.quoteCurrency
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
  };

  multiply = ({ value }) => {
    this.props.dispatch(multiplyByItself(value));
  };

  baseValueOnChange = baseValue => {
    this.setState({ baseValue }, () => {
      this.sendRequest({
        amount: this.state.baseValue,
        base: this.state.baseCurrency,
        quote: this.props.quoteCurrency
      }),
        this.props.dispatch(clearData());
    });
  };

  popUpShown = () => {
    this.props.dispatch(changeVisibility());
  };
  render() {
    return (
      <View style={styles.container}>
        {!this.props.currencies ? null : (
          <PopUp
            visibility={this.props.popUp}
            currenciesData={Object.keys(this.props.currencies)}
          />
        )}

        <BaseCurrency
          initialValue={this.state.baseValue}
          changeValue={baseValue => this.baseValueOnChange(baseValue)}
          currency={this.state.baseCurrency}
        />
        {!this.props.data || this.state.baseValue === "" ? (
          <QuoteQurrency
            initialValue="..."
            currency={this.props.quoteCurrency}
          />
        ) : (
          <QuoteQurrency
            initialValue={this.props.data.rates[
              this.props.quoteCurrency
            ].toFixed(2)}
            currency={this.props.quoteCurrency}
            onPress={this.popUpShown}
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
    multiply: state.baseCurrency.value,
    currencies: state.currencyList.data,
    popUp: state.modalView.visible,
    quoteCurrency: state.modalView.quoteCurrency
  };
};

export default connect(mapStateToProps)(Home);
