import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {zomato, dunzo} from '../assests/image';

const {height, width} = Dimensions.get('window');

const data = {
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
  '16 Sep 2020': [
    {
      date: '16 Sep 2020',
      time: '05:23 pm',
      from: 'Transfer from Dobleh',
      img: zomato,
      status: 'Successful',
      amount: '₹ 1.14',
    },
    {
      date: '16 Sep 2020',
      time: '05:23 pm',
      from: 'Transfer from Dobleh',
      img: dunzo,
      status: 'Successful',
      amount: '₹ 1.14',
    },
  ],
};
const sucess = '#2A9D8F';
export default function TransactionHistory() {
  return (
    <View>
      <Text style={styles.header}>{'Transaction History'}</Text>
      {Object.keys(data).map((key, index) => (
        <>
          <Text style={[styles.categoryData, styles.addSpace]}>{key}</Text>
          {data[key].map((value) => (
            <View>
              <View style={styles.container}>
                <View style={styles.rightBlock}>
                  <Image
                    source={value.img}
                    style={styles.icon}
                    resizeMode={'contain'}
                  />
                  <View style={styles.categoryDetails}>
                    <Text style={[styles.color, styles.categoryTitle]}>
                      {value.from}
                    </Text>
                    <Text style={[styles.color, styles.categoryData]}>
                      {value.time}
                    </Text>
                  </View>
                </View>
                <View style={styles.paymentStatus}>
                  <Text
                    style={[
                      styles.amount,
                      {
                        color:
                          value.status === 'Successful' ? sucess : '#eb5e38',
                      },
                    ]}>
                    {`${value.status === 'Successful' ? '+' : '-'} ${
                      value.amount
                    }`}
                  </Text>
                  <Text
                    style={[
                      styles.staus,
                      {
                        color:
                          value.status === 'Successful' ? sucess : '#eb5e38',
                      },
                    ]}>
                    {value.status}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderColor: '#d2d2d4',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width / 30,
    paddingVertical: width / 40,
    marginTop: width / 40,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#36383d',
  },
  rightBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDetails: {
    paddingHorizontal: width / 30,
  },
  color: {
    fontWeight: '600',
  },
  categoryTitle: {
    fontSize: 15,
    color: '#36383d',
  },
  categoryData: {
    fontSize: 11,
    fontWeight: '600',
    color: '#b0b0b0',
  },
  icon: {
    // width: width / 7,
  },
  paymentStatus: {
    alignItems: 'center',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  staus: {
    fontSize: 13,
    fontStyle: 'italic',
  },
  addSpace: {
    marginTop: width / 40,
  },
});
