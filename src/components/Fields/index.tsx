/* eslint-disable import/no-unresolved */
import React from 'react';

import Dots from '@/components/Dots';

import { FlatList } from 'react-native-gesture-handler';
import { SubTitle, Body, Label, Row } from './styles';

import { Field } from './types';

const Fields = ({ data }: Field): JSX.Element => {
  return (
    <>
      {data.title && <SubTitle>{data.title}</SubTitle>}
      <Body>
        <FlatList
          scrollEnabled={false}
          data={data.fields}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <Row>
              <Label>{item.title}</Label>
              <Dots
                levels={item.levels}
                title={item.title}
                square={item.square}
              />
            </Row>
          )}
        />
      </Body>
    </>
  );
};

export default Fields;
