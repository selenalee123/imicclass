import React from 'react';
import {TextStyle, ViewStyle, Text, TouchableOpacity} from 'react-native';

export type Props = {
  style?: ViewStyle | ViewStyle[]; //? mean optional
  buttonText: string;
  textStyle: TextStyle;
  onPress: () => void;
};

const MyButton: React.FC<Props> = ({style, buttonText, textStyle, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

export {MyButton as MyButton2};
