import React from 'react';
import templates from '@/data/templates.json';
import CellBox from '@/components/Layouts/CellBox';
import {FlatList} from 'react-native';

function ComponentsPage(): React.JSX.Element {
  return (
    <FlatList
      data={templates}
      keyExtractor={item => item.groupName}
      renderItem={({item}) => <CellBox {...item} />}
    />
  );
}

export default ComponentsPage;
