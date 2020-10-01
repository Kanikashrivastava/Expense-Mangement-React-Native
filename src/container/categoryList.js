import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

function CategoryList({categories}) {
  return (
    <View>
      {categories.map((category) => (
        <View
          key={category.id}
          style={[
            styles.expenseCategoryBlock,
            {backgroundColor: category.color},
          ]}>
          <Text style={styles.categoryText}>{category.name}</Text>
        </View>
      ))}
    </View>
  );
}
export default CategoryList;

const styles = StyleSheet.create({
  expenseCategoryBlock: {
    borderRadius: 100,
    paddingHorizontal: 5,
    marginVertical: 2,
    paddingVertical: 2,
    width: width / 4.5,
    textAlign: 'center',
  },
  categoryText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
  },
});
