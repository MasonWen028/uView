import React from 'react';
import components from '@/data/components.json';
import CellBox from '@/components/Layouts/CellBox';

function ComponentsPage(): React.JSX.Element {
  console.log(components);
  return (
    <>
      {components.map(component => (
        <CellBox {...component} />
      ))}
    </>
  );
}

export default ComponentsPage;
