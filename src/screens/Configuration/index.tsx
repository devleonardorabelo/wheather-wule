import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {ConfigurationProps} from '../../types/navigation';

const Home = ({navigation}: ConfigurationProps) => {
  return (
    <View>
      <Pressable onPress={() => navigation.pop()}>
        <Text>Teste</Text>
      </Pressable>
    </View>
  );
};

export default Home;
