import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const amountColor = {
  Successful: '#2A9D8F',
  Failed: '#eb5e38',
};

const amountSign = {
  Successful: '+',
  Failed: '-',
};
export default function TransactionHistory({categoriesData}) {
  return categoriesData ? (
    <View>
      <Text style={styles.header}>{'Transaction History'}</Text>
      {Object.keys(categoriesData).map((key, index) => (
        <View>
          <Text key={index} style={[styles.categoryData, styles.addSpace]}>
            {key}
          </Text>
          {categoriesData &&
            categoriesData[key].map((value, keyIndex) => (
              <View key={keyIndex}>
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
                          color: amountColor[value.status],
                        },
                      ]}>
                      {`${amountSign[value.status]} ${value.amount}`}
                    </Text>
                    <Text
                      style={[
                        styles.staus,
                        {
                          color: amountColor[value.status],
                        },
                      ]}>
                      {value.status}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      ))}
    </View>
  ) : null;
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
