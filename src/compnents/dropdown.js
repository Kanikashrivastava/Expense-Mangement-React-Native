import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const data = [{name: 'Jan 2020'}, {name: 'Feb 2020'}, {name: 'Mar 2020'}];
class Dropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
      selectedValue: data[0].name,
    };
  }

  showDropdownMenu = (event) => {
    this.setState({displayMenu: !this.state.displayMenu});
  };

  hideDropdownMenu = (selectedValue) => {
    let {monthHandler} = this.props;
    this.setState({displayMenu: false, selectedValue});
    monthHandler(selectedValue);
  };

  render() {
    const {selectedValue} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.showDropdownMenu}>
          <Text>{selectedValue}</Text>
        </TouchableOpacity>
        <View style={styles.list}>
          {this.state.displayMenu
            ? data.map((val) => (
                <TouchableOpacity
                  onPress={() => this.hideDropdownMenu(val.name)}>
                  <Text style={styles.itemSubText}>{val.name}</Text>
                </TouchableOpacity>
              ))
            : null}
        </View>
      </View>
    );
  }
}

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    minWidth: 80,
    fontSize: 12,
    marginTop: 15,
  },
  dropdown: {
    backgroundColor: 'red',
  },
  list: {
    minHeight: 70,
    minWidth: 100,
    fontWeight: 'bold',
    elevation: 1,
  },
  itemSubText: {
    fontSize: 12,
    paddingTop: 2,
    paddingBottom: 2,
    margin: 2,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    fontSize: 12,
    borderRadius: 7,
    fontWeight: 'bold',
    maxWidth: 100,
  },
});
