import React from 'react';
import components from '@/data/components.json';
import CellBox from '@/components/Layouts/CellBox';
import {FlatList} from 'react-native';

function ComponentsPage(): React.JSX.Element {
  return (
    <FlatList
      data={components}
      keyExtractor={item => item.groupName}
      renderItem={({item}) => <CellBox {...item} />}
    />
  );
}

export default ComponentsPage;
