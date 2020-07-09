import React from 'react';
import { View, Text } from 'react-native';

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
        }}
      >
        Search view
      </Text>
    </View>
  );
};

export default Search;
