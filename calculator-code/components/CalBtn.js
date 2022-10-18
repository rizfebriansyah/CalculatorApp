import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CalBtn extends React.Component {

  static defaultProps = {
    onPress: function() {},
    title: "",
    color: "white",
    backgroundColor: "black",
    radius: 40,
    style: {},
  };


  render() {
    var r = this.props.radius;
    var w = this.props.radius * 2;
    var h = this.props.radius * 2;
    var bc = this.props.backgroundColor;

    return (
      <TouchableOpacity onPress={this.props.onPress} 
        style={[styles.container, { width: w, height: h, borderRadius: r, backgroundColor: bc }, { ...this.props.style }]}>
        <Text style={[styles.text, { color: this.props.color }]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", margin: 5, },
  text: { fontWeight: "bold", fontSize: 35,  },
});