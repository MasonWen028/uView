import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

function Flower({size = 50}): React.JSX.Element {
  const styles = StyleSheet.create({
    flower: {
      width: size,
      height: size,
    },
  });

  return (
    <Svg style={styles.flower} viewBox="0 0 100 100">
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="10"
        fill="#E9E9E9"
        rx="5"
        ry="5"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#989697"
        rx="5"
        ry="5"
        transform="rotate(30 105.98 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#9B999A"
        rx="5"
        ry="5"
        transform="rotate(60 75.98 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#A3A1A2"
        rx="5"
        ry="5"
        transform="rotate(90 65 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#ABA9AA"
        rx="5"
        ry="5"
        transform="rotate(120 58.66 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#B2B2B2"
        rx="5"
        ry="5"
        transform="rotate(150 54.02 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#BAB8B9"
        rx="5"
        ry="5"
        transform="rotate(180 50 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#C2C0C1"
        rx="5"
        ry="5"
        transform="rotate(-150 45.98 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#CBCBCB"
        rx="5"
        ry="5"
        transform="rotate(-120 41.34 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#D2D2D2"
        rx="5"
        ry="5"
        transform="rotate(-90 35 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#DADADA"
        rx="5"
        ry="5"
        transform="rotate(-60 24.02 65)"
      />
      <Rect
        width="7"
        height="20"
        x="46.5"
        y="40"
        fill="#E2E2E2"
        rx="5"
        ry="5"
        transform="rotate(-30 -5.98 65)"
      />
    </Svg>
  );
}

export default Flower;
