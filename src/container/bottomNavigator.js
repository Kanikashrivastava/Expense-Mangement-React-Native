import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {home, notifications, offers, profile} from '../assests/image';

const {height, width} = Dimensions.get('window');
function BottomNavigator(props) {
  return (
    <View style={styles.container}>
      <Image source={home} style={styles.icon} resizeMode={'contain'} />
      <Image
        source={notifications}
        style={styles.icon}
        resizeMode={'contain'}
      />
      <Image source={offers} style={styles.icon} resizeMode={'contain'} />
      <Image source={profile} style={styles.icon} resizeMode={'contain'} />
    </View>
  );
}

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: '#919293',
    borderTopWidth: 0.5,
  },
  icon: {
    height: height / 15,
    width: width / 15,
  },
});
