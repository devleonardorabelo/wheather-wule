import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {ConfigurationProps} from '../../types/Navigation/navigation';
import {ICONS} from '../../assets';
import {COLORS} from '../../theme';

import {Button, Page, Selectable, TextInput} from '../../components';
import styles from './styles';
import WeatherContext from '../../contexts/weather';

const Home = ({navigation}: ConfigurationProps) => {
  const [selectedItem, setSelectedItem] = useState<string>('location');
  const [city, setCity] = useState<string>('');
  const {addCurrentLocation, removeCurrentLocation, currentLocation} =
    useContext(WeatherContext);

  const handleSelectItem = useCallback(
    value => {
      setSelectedItem(value);
      if (value === 'location') {
        removeCurrentLocation();
      }
    },
    [removeCurrentLocation],
  );

  const handleCurrentLocation = useCallback(() => {
    if (city.length > 3) {
      addCurrentLocation(city);
    }
  }, [addCurrentLocation, city]);

  const handleInputChange = useCallback(value => setCity(value), []);

  useEffect(() => {
    if (typeof currentLocation === 'string') {
      setSelectedItem('city');
    } else {
      setSelectedItem('location');
    }
  }, [currentLocation]);

  return (
    <Page primaryColor={COLORS.BLUE.NORMAL} secondaryColor={COLORS.BLUE.LIGHT}>
      <Button image={ICONS.arrowLeft} onPress={() => navigation.pop()} />
      <Text style={[styles.h3, styles.mv4]}>Configuração</Text>
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
          onFocus={() => handleSelectItem('city')}
          style={styles.mt3}
          placeholder="Qual cidade?"
          onChangeText={value => handleInputChange(value)}
          onEndEditing={() => handleCurrentLocation()}
          defaultValue={
            typeof currentLocation === 'string' ? currentLocation : ''
          }
        />
      </Selectable>
    </Page>
  );
};

export default Home;
