import React from 'react';
import { Button as RNButton, View } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  flex: 1;
  background-color: ${({ palette }) => palette ?? 'white'};
  border-radius: 80px;
  border-width: 1px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: 8px;
  margin-right: 8px;
`;

const Button = ({ title, palette, onPress }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <StyledView palette={palette}>
        <RNButton title={title} onPress={onPress} color="#000000" />
      </StyledView>
    </View>
  );
};

export default Button;
