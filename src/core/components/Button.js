import React from 'react';
import { Button as RNButton, View } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  flex: 1;
  background-color: ${({ palette }) => palette ?? 'white'};
  border-radius: ${({ square }) => (square ? '0px' : '80px')};
  border-width: 1px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: 8px;
  margin-right: 8px;
`;

const Button = ({ testID, title, palette, onPress, square }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <StyledView palette={palette} square={square}>
        <RNButton
          testID={testID ?? 'button'}
          title={title}
          onPress={onPress}
          color="#000000"
        />
      </StyledView>
    </View>
  );
};

export default Button;
