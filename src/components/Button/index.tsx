import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Ripple from 'react-native-material-ripple';
import InnerComponent from './components/InnerComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  theme: 'default' | 'primary' | 'warning' | 'error' | 'success';
  size: 'default' | 'medium' | 'mini';
  shape: 'angle' | 'round';
  ripple: boolean;
  isLoading: boolean;
  disabled?: boolean;
  text?: string;
  onPress?: () => void;
}

const Button = ({
  theme = 'default',
  size = 'default',
  shape = 'angle',
  ripple = false,
  isLoading = false,
  disabled = false,
  text = 'Click me',
  onPress,
}: ButtonProps): React.JSX.Element => {
  const btnStyles = useMemo(() => {
    let backColor = '#ffffff';
    let textColor = '#606266';
    let borderColor = '#c0c4cc';
    let fontSize = responsiveFontSize(2.5);
    let height = responsiveFontSize(5.5);
    let borderRadius = 5;
    let space = responsiveFontSize(5);

    switch (theme) {
      case 'primary':
        backColor = '#2979ff';
        textColor = '#ffffff';
        borderColor = '#2979ff';
        break;
      case 'error':
        backColor = '#fa3534';
        textColor = '#ffffff';
        borderColor = '#fa3534';
        break;
      case 'warning':
        backColor = '#ff9900';
        textColor = '#fff';
        borderColor = '#ff9900';
        break;
      case 'success':
        backColor = '#19be6b';
        textColor = '#fff';
        borderColor = '#19be6b';
        break;
      default:
        backColor = '#ffffff';
        textColor = '#606266';
        borderColor = '#c0c4cc';
    }

    switch (size) {
      case 'medium':
        fontSize = responsiveFontSize(1.6);
        height = responsiveFontSize(4.5);
        space = responsiveFontSize(4);
        break;
      case 'mini':
        fontSize = responsiveFontSize(1.4);
        height = responsiveFontSize(3.5);
        space = responsiveFontSize(3);
        break;
    }

    if (shape === 'round') {
      borderRadius = responsiveFontSize(3.5);
    }

    return StyleSheet.create({
      btnBasis: {
        position: 'relative',
        paddingLeft: space,
        paddingRight: space,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: fontSize,
        height: height,
        backgroundColor: backColor,
        color: textColor,
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: 1,
      },
      btnText: {
        color: textColor,
        fontSize: fontSize,
      },
      hairlineBorder: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        borderWidth: 0.5,
        borderColor: '#000',
        transform: [{scale: 0.5}],
        zIndex: 1,
      },
      hasLoading: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      innerTouchable: {
        backgroundColor: 'black',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      container: {
        height: height,
      },
    });
  }, [theme, size, shape]);
  return (
    <View style={btnStyles.container}>
      {ripple && (
        <Ripple
          style={btnStyles.btnBasis}
          rippleColor="rgba(0, 0, 0, .32)"
          disabled={isLoading || disabled}
          onPress={onPress}>
          <InnerComponent
            isLoading={isLoading}
            style={btnStyles.btnText}
            text={text}
            textColor={btnStyles.btnText.color}
          />
        </Ripple>
      )}
      {!ripple && (
        <TouchableOpacity
          style={btnStyles.btnBasis}
          onPress={onPress}
          disabled={isLoading || disabled}>
          <InnerComponent
            isLoading={isLoading}
            style={btnStyles.btnText}
            text={text}
            textColor={btnStyles.btnText.color}
          />
          {/* {thinBorder && <View style={btnStyles.hairlineBorder} />} */}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Button;
