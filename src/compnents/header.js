import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.routeName}>Expenses</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#919293',
    backgroundColor: '#fff',
  },
  routeName: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: width / 10,
    paddingVertical: height / 60,
  },
});
