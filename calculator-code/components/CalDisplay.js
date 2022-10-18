import React from 'react';
import { StyleSheet, View, Text }from 'react-native';

export default class CalDisplay extends React.Component {

  static defaultProps = {
    display: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.props.display}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:  { padding: 18 },
  display:    { fontSize: 100, color: "#edeae1", textAlign: "right" },
})