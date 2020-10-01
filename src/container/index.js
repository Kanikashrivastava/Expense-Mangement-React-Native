import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

import Header from '../compnents/header';
import Chart from '../compnents/chart';
import CategoryList from './categoryList';
import BottomNavigator from './bottomNavigator';
import TransectionCard from '../compnents/transectionCard';
import TransactionHistory from './transactionHistory';
import Dropdown from '../compnents/dropdown';

const {width, Height} = Dimensions.get('window');
const categories = [
  {
    name: 'Foods',
    color: '#2A9D8F',
    id: '1',
    expenseRatio: 30,
    rupee: '30,257',
  },
  {
    name: 'Shoppings',
    color: '#264653',
    id: '2',
    expenseRatio: 20,
    rupee: '30,257',
  },
  {
    name: 'Rent',
    color: '#E9C46A',
    id: '3',
    expenseRatio: 10,
    rupee: '30,257',
  },
  {
    name: 'Bill Pay',
    color: '#F4A261',
    id: '4',
    expenseRatio: 30,
    rupee: '30,257',
  },
  {
    name: 'Banking',
    color: '#E76F51',
    id: '5',
    expenseRatio: 10,
    rupee: '30,257',
  },
];
function Expense() {
  return (
    <SafeAreaView style={styles.body}>
      <Header />
      <ScrollView style={styles.block}>
        <Dropdown />
        <View style={styles.expenseBlock}>
          <Chart categories={categories} />
          <CategoryList categories={categories} />
        </View>
        <TransectionCard />
        <TransactionHistory />
      </ScrollView>
      <BottomNavigator />
    </SafeAreaView>
  );
}

export default Expense;

const styles = StyleSheet.create({
  expenseBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: '#fafafb',
    flex: 1,
    justifyContent: 'space-between',
  },
  block: {
    paddingHorizontal: width / 30,
  },
});
