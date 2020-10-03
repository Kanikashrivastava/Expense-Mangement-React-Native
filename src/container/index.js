import React, {useState} from 'react';
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
import {zomato, dunzo} from '../assests/image';

const {width, Height} = Dimensions.get('window');
const categories = {
  'Jan 2020': [
    {
      name: 'Foods',
      color: '#2A9D8F',
      id: '1',
      expenseRatio: 30,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Shoppings',
      color: '#264653',
      id: '2',
      expenseRatio: 20,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Rent',
      color: '#E9C46A',
      id: '3',
      expenseRatio: 10,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Bill Pay',
      color: '#F4A261',
      id: '4',
      expenseRatio: 30,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Banking',
      color: '#E76F51',
      id: '5',
      expenseRatio: 10,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
  ],
  'Feb 2020': [
    {
      name: 'Foods',
      color: '#2A9D8F',
      id: '1',
      expenseRatio: 30,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Rent',
      color: '#E9C46A',
      id: '3',
      expenseRatio: 10,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Bill Pay',
      color: '#F4A261',
      id: '4',
      expenseRatio: 40,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Banking',
      color: '#E76F51',
      id: '5',
      expenseRatio: 20,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
  ],
  'Mar 2020': [
    {
      name: 'Foods',
      color: '#2A9D8F',
      id: '1',
      expenseRatio: 30,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Rent',
      color: '#E9C46A',
      id: '3',
      expenseRatio: 10,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Bill Pay',
      color: '#F4A261',
      id: '4',
      expenseRatio: 40,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
    {
      name: 'Banking',
      color: '#E76F51',
      id: '5',
      expenseRatio: 20,
      rupee: '30,257',
      history: {
        '17 Sep 2020': [
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: zomato,
            status: 'Successful',
            amount: '₹ 1.14',
          },
          {
            date: '17 Sep 2020',
            time: '05:23 pm',
            from: 'Transfer from Dobleh',
            img: dunzo,
            status: 'Failed',
            amount: '₹ 1.14',
          },
        ],
      },
    },
  ],
};
function Expense() {
  const data = Object.keys(categories);
  const [month, setMonth] = useState(data[0]);
  const [selectedCategory, setSelectedCategory] = useState(
    categories[month][0].name,
  );
  const transactionCardData =
    selectedCategory &&
    categories[month].find((element) => element.name === selectedCategory);

  const monthHandler = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  const onSelectCategory = (val) => {
    setSelectedCategory(val);
  };

  return (
    <SafeAreaView style={styles.body}>
      <Header />
      <ScrollView style={styles.block}>
        <Dropdown data={data} monthHandler={monthHandler} />
        <View style={styles.expenseBlock}>
          <Chart categories={categories[month]} />
          <CategoryList
            categories={categories[month]}
            onSelectCategory={onSelectCategory}
          />
        </View>
        <TransectionCard categoriesData={transactionCardData} />
        <TransactionHistory categoriesData={transactionCardData.history} />
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
