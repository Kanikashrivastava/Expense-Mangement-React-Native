import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {dine} from '../assests/image';

const {height, width} = Dimensions.get('window');
export default function TransectionCard() {
  return (
    <View style={styles.container}>
      <View style={styles.rightBlock}>
        <Image source={dine} style={styles.icon} resizeMode={'contain'} />
        <View style={styles.categoryDetails}>
          <Text style={[styles.color, styles.categoryTitle]}>Foods</Text>
          <Text style={[styles.color, styles.categoryData]}>₹30,257</Text>
        </View>
      </View>
      <Text style={styles.totalExpenseRatio}>90.57 %</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A9D8F',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width / 30,
    marginVertical: height / 30,
    paddingVertical: width / 40,
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDetails: {
    paddingHorizontal: width / 30,
  },
  totalExpenseRatio: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
  },
  color: {
    color: '#fff',
    fontWeight: '600',
  },
  categoryTitle: {
    fontSize: 13,
  },
  categoryData: {
    fontSize: 16,
  },
  icon: {
    width: width / 9,
    height: width / 9,
  },
});
