import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

function CategoryList({categories, onSelectCategory}) {
  const [selectedValue, setSelectedValue] = useState(categories[0].name);
  const selectCategory = (val) => () => {
    setSelectedValue(val);
  };
  useEffect(() => {
    if (selectedValue) {
      return onSelectCategory(selectedValue);
    }
  }, [onSelectCategory, selectedValue]);

  return (
    <View>
      {categories
        ? categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={selectCategory(category.name)}
              style={[
                styles.expenseCategoryBlock,
                {backgroundColor: category.color},
              ]}>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))
        : null}
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
