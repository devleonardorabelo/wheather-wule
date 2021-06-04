import React from 'react';
import {HomeProps} from '../../types/navigation';

import {Button, Page} from '../../components';
import {COLORS} from '../../theme';
import {ICONS} from '../../assets';

import styles from './styles';

const Home = ({navigation}: HomeProps) => {
  return (
    <Page primaryColor={COLORS.BLUE.NORMAL} secondaryColor={COLORS.BLUE.LIGHT}>
      <Button
        image={ICONS.settings}
        style={styles.button}
        onPress={() => navigation.push('Configuration')}
      />
    </Page>
  );
};

export default Home;
