import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {HomeProps} from '../../types/navigation';

const Home = ({navigation}: HomeProps) => {
  return (
    <View>
      <Pressable onPress={() => navigation.push('Configuration')}>
        <Text>Hello</Text>
      </Pressable>
    </View>
  );
};

export default Home;
