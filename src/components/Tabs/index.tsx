import React, { useState } from 'react';

import { TabsProps } from './types';
import { ContainerTabs, Button, TabsText, Line } from './styles';

const Tabs = ({
  tabs,
  childrenStyle,
  onTabSelected,
  testID,
}: TabsProps): JSX.Element => {
  const [select, setSelect] = useState(0);

  const handler = (index: number): void => {
    setSelect(index);

    if (onTabSelected) onTabSelected(tabs[index]);
  };

  return (
    <>
      <ContainerTabs testID={testID}>
        {tabs.map((tab, index) => (
          <Button
            key={`button-${tab.info.label}`}
            onPress={(): void => handler(index)}
            testID={`button-${index}`}
          >
            <TabsText testID={`button-${index}-title`}>
              {tab.info.label}
            </TabsText>
            {index === select && <Line />}
          </Button>
        ))}
      </ContainerTabs>
      {tabs.map((tab, index) =>
        index === select
          ? React.cloneElement(tab.component, {
              key: `content${tab.info.label}`,
              childrenStyle,
            })
          : null,
      )}
    </>
  );
};

export default Tabs;
