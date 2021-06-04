import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

type Props = {
  primaryColor: string;
  secondaryColor: string;
  children: JSX.Element;
};

const Page = ({primaryColor, secondaryColor, children}: Props) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[primaryColor, secondaryColor]}>
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default Page;
