import React, {useCallback, useState} from 'react';
import {Text} from 'react-native';
import {ConfigurationProps} from '../../types/navigation';
import {ICONS} from '../../assets';
import {COLORS} from '../../theme';

import {Button, Page, Selectable, TextInput} from '../../components';
import styles from './styles';

const Home = ({navigation}: ConfigurationProps) => {
  const [selectedItem, setSelectedItem] = useState<string>('location');

  const handleSelectItem = useCallback(item => setSelectedItem(item), []);

  return (
    <Page primaryColor={COLORS.BLUE.NORMAL} secondaryColor={COLORS.BLUE.LIGHT}>
      <Button image={ICONS.arrowLeft} onPress={() => navigation.pop()} />
      <Text style={[styles.h2, styles.mv4]}>Configuração</Text>
      <Selectable
        onPress={() => handleSelectItem('location')}
        style={styles.mb3}
        title="Usar minha localização"
        icon={ICONS.pin}
        selected={selectedItem === 'location'}
      />
      <Selectable
        onPress={() => handleSelectItem('city')}
        title="Escolher cidade"
        selected={selectedItem === 'city'}>
        <TextInput
          style={styles.mt3}
          placeholder="Qual cidade?"
          onChange={e => console.log(e)}
        />
      </Selectable>
    </Page>
  );
};

export default Home;
