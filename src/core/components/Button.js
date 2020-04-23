import React from 'react';
import { Button as RNButton, View } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  background-color: ${({ palette }) => palette ?? 'white'};
  border-radius: 80px;
  border-width: 1px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
`;

const Button = ({ title, palette, onPress }) => {
  return (
    <StyledView palette={palette}>
      <RNButton title={title} onPress={onPress} color="#000000" />
    </StyledView>
  );
};

export default Button;
