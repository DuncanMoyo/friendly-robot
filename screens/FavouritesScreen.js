import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const FavouritesScreen = (props) => {
  return (
    <View>
      <Text style={styles.screen} >The Favourites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default FavouritesScreen;