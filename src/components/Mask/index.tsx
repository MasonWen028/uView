import React, {useEffect, useRef} from 'react';
import {Animated, Modal, StyleSheet} from 'react-native';

interface MaskProps {
  children: React.JSX.Element;
  show?: boolean;
  onClose?: () => {};
}

function Mask({children, show = false}: MaskProps): React.JSX.Element {
  const opacity = useRef(new Animated.Value(0)).current;

  // const handleModalShow = () => {
  //   StatusBar.setTranslucent(true);
  //   StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.6)');
  // };

  // const handleModalHide = () => {
  //   StatusBar.setTranslucent(false);
  //   StatusBar.setBackgroundColor('transparent');
  // };

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  if (show) {
    const styles = StyleSheet.create({
      mask: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 10070,
        opacity: opacity,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    return (
      <Modal transparent={true} statusBarTranslucent visible={show}>
        <Animated.View style={[styles.mask, {opacity}]}>
          {children}
        </Animated.View>
      </Modal>
    );
  } else {
    return <></>;
  }
}

export default Mask;
