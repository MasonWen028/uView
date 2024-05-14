import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ConfigBox from '@/components/Layouts/ConfigBox';
import Button from '@/components/Button';

const Buttons = () => {
  const [btnTheme, setBtnTheme] = useState('default');

  const [btnSize, setBtnSize] = useState('default');

  const [btnShape, setBtnShape] = useState('angle');

  const [btnRipple, setBtnRipple] = useState(true);

  // const [btnThinBorder, setThinBorder] = useState(true);

  const [btnLoading, setLoading] = useState(false);

  const handleLoadingChanged = (val: number) => {
    setLoading(val === 0);
  };

  const handleRippleChanged = (val: number) => {
    setBtnRipple(val === 0);
  };

  const handleShapeChanged = (val: number) => {
    let target = 'angle';
    if (val === 1) {
      target = 'round';
    }
    setBtnShape(target);
  };

  const handleSizeChanged = (val: number) => {
    let target = 'default';
    switch (val) {
      case 0:
        target = 'default';
        break;
      case 1:
        target = 'medium';
        break;
      case 2:
        target = 'mini';
        break;
    }
    setBtnSize(target);
  };

  const handleThemeChanged = (val: number) => {
    let target = 'default';
    switch (val) {
      case 0:
        target = 'default';
        break;
      case 1:
        target = 'primary';
        break;
      case 2:
        target = 'error';
        break;
      case 3:
        target = 'warning';
        break;
      case 4:
        target = 'success';
        break;
    }
    setBtnTheme(target);
  };

  // const handleThinBorderChanged = (val: number) => {
  //   setThinBorder(val === 0);
  // };

  const items = [
    {
      states: ['default', 'primary', 'error', 'warning', 'success'],
      states_en: ['default', 'primary', 'error', 'warning', 'success'],
      label: '主题选择',
      label_en: 'Theme',
      selected: 0,
      selectedChanged: handleThemeChanged,
    },
    {
      states: ['默认', '中等', '迷你'],
      states_en: ['default', 'medium', 'mini'],
      label: '尺寸大小',
      label_en: 'button size',
      selected: 0,
      selectedChanged: handleSizeChanged,
    },
    {
      states: ['直角', '圆角'],
      states_en: ['angle', 'round'],
      label: '形状',
      label_en: 'Shape',
      selected: 0,
      selectedChanged: handleShapeChanged,
    },
    {
      states: ['是', '否'],
      states_en: ['Yes', 'No'],
      label: '水波纹',
      label_en: 'Ripple',
      selected: 0,
      selectedChanged: handleRippleChanged,
    },
    // {
    //   states: ['是', '否'],
    //   states_en: ['Yes', 'No'],
    //   label: '细边框',
    //   label_en: 'Thiner border',
    //   selected: 0,
    //   selectedChanged: handleThinBorderChanged,
    // },
    {
      states: ['是', '否'],
      states_en: ['Yes', 'No'],
      label: '加载中',
      label_en: 'Is loading',
      selected: 1,
      selectedChanged: handleLoadingChanged,
    },
  ];

  return (
    <View style={styles.main}>
      <View style={styles.warp}>
        <Button
          theme={btnTheme as any}
          size={btnSize as any}
          shape={btnShape as any}
          ripple={btnRipple}
          // thinBorder={btnThinBorder}
          isLoading={btnLoading}
        />
      </View>
      <View style={styles.configWrap}>
        <ConfigBox items={items} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  warp: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    padding: 20,
    margin: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  configWrap: {
    padding: 10,
  },
});

export default Buttons;
