import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Pie from 'react-native-pie';

const {width, height} = Dimensions.get('window');
export default ({categories}) => {
  const newcategories = [];
  categories.map((value) =>
    newcategories.push({percentage: value.expenseRatio, color: value.color}),
  );
  console.log(newcategories);

  return (
    <View style={styles.container}>
      <Pie
        radius={100}
        innerRadius={80}
        sections={newcategories}
        dividerSize={6}
        strokeCap={'butt'}
      />
      <View style={styles.gauge}>
        <Text style={[styles.gaugeText, styles.gaugeText2]}>Total </Text>
        <Text style={[styles.gaugeText1, styles.gaugeText]}>
          ₹ {categories[0].rupee}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gauge: {
    position: 'absolute',
    width: width / 2.3,
    height: height / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    width: width / 4,
    textAlign: 'center',
  },
  gaugeText2: {
    fontSize: 22,
    fontWeight: '500',
  },
  gaugeText1: {
    fontSize: 24,
    fontWeight: '700',
  },
});
