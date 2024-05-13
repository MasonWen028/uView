import React from 'react';
import tools from '@/data/tools.json';
import CellBox from '@/components/Layouts/CellBox';
import {FlatList} from 'react-native';

function ComponentsPage(): React.JSX.Element {
  return (
    <FlatList
      data={tools}
      keyExtractor={item => item.groupName}
      renderItem={({item}) => <CellBox {...item} />}
    />
  );
}

export default ComponentsPage;
