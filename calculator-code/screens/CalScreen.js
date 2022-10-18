require("../lib/swisscalc.lib.operator.js");
require("../lib/swisscalc.lib.operatorCache.js");
require("../lib/swisscalc.lib.format.js");
require("../lib/swisscalc.lib.shuntingYard.js");
require("../lib/swisscalc.calc.calculator.js");
require("../lib/swisscalc.display.numericDisplay.js");
require("../lib/swisscalc.display.memoryDisplay.js");

import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { CalDisplay, CalBtn } from './../components';
import React, {useState} from 'react';

export default class CalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ac:'AC',
      display: "0",
      
    };
    this.oc = global.swisscalc.lib.operatorCache;
    this.calc = new global.swisscalc.calc.calculator();


  }

    onNumberPress=(digit)=>{
      this.calc.addDigit(digit);
      this.setState({display:this.calc.getMainDisplay(),ac:'C'});
    }

    onBinaryOperatorPress=(operator)=>{
      this.calc.addBinaryOperator(operator);
      this.setState({display:this.calc.getMainDisplay()});
    }

    onUnaryOperatorPress=(operator)=>{
      this.calc.addUnaryOperator(operator);
      this.setState({display:this.calc.getMainDisplay()});
    }

    onEqualsPress=()=>{
      this.calc.equalsPressed();
      this.setState({display:this.calc.getMainDisplay()});
    }

    onBackspacePress=()=>{
      this.calc.backspace();
      this.setState({display:this.calc.getMainDisplay()});
    }

    onClearPress=()=>{
      this.calc.clear();
      this.setState({display:this.calc.getMainDisplay(), ac:'AC'});
    }

    onPlusMinusPress=()=>{
      this.calc.negate();
      this.setState({display:this.calc.getMainDisplay()});
    }



  render() {
  return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent: "flex-end"}}>
          <CalDisplay display={this.state.display} />
        </View>

        <View>
          <View style={{flexDirection: "row", justifyContent: "space-between",}}>
            <CalBtn onPress={this.onClearPress} title={this.state.ac} color="#e8e8e8" backgroundColor="#ccb845" />
            <CalBtn onPress={this.onPlusMinusPress} title="+/-" color="#fffdf2" backgroundColor="#a8a383" />
            <CalBtn onPress={()=>{this.onUnaryOperatorPress(this.oc.PercentOperator)}} title="%" color="#fffdf2" backgroundColor="#a8a383" />
            <CalBtn onPress={()=>{this.onBinaryOperatorPress(this.oc.DivisionOperator)}} title="÷" color="#e0d7cc" backgroundColor="#8e21d1" />
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between",}}>
            <CalBtn onPress={()=>{this.onNumberPress("7")}} title="7" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onNumberPress("8")}} title="8" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onNumberPress("9")}} title="9" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}} title="x" color="#e0d7cc" backgroundColor="#8e21d1" />
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between",}}>
            <CalBtn onPress={()=>{this.onNumberPress("4")}} title="4" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onNumberPress("5")}} title="5" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onNumberPress("6")}} title="6" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onBinaryOperatorPress(this.oc.SubtractionOperator)}} title="-" color="#e0d7cc" backgroundColor="#8e21d1" />
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between",}}>
            <CalBtn onPress={()=>{this.onNumberPress("1")}} title="1" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onNumberPress("2")}} title="2" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onNumberPress("3")}} title="3" color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={()=>{this.onBinaryOperatorPress(this.oc.AdditionOperator)}} title="+" color="#e0d7cc" backgroundColor="#8e21d1" />
          </View>

          <View style={{flexDirection: "row", justifyContent: "space-between",}}>
            <CalBtn onPress={()=>{this.onNumberPress("0")}} title="0" color="#fcfcfc" backgroundColor="#272c70" style={{flex:2}} />
            <CalBtn onPress={()=>{this.onNumberPress(".")}} title="." color="#fcfcfc" backgroundColor="#272c70" />
            <CalBtn onPress={this.onEqualsPress} title="=" color="#242320" backgroundColor="#e67a00" />
          </View>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 30, paddingBottom: 25, backgroundColor: "#000000" },
})  