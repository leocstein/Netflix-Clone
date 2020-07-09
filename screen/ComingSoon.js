import React from 'react';
import { View, Text } from 'react-native';

const ComingSoon = () => {
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
        Coming soon view
      </Text>
    </View>
  );
};

export default ComingSoon;
