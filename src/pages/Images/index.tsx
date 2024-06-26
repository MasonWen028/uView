import ImageWithStatus from '@/components/ImageWithStatus';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ConfigBox from '@/components/Layouts/ConfigBox';
import RotatingComponent from '@/components/Loading/components/RotatingComponent';

const Images = () => {
  const [imgState, setImgState] = useState(0);

  const [customLoading, setCustomLoading] = useState(false);

  const [customError, setCustomError] = useState(false);

  const [isCircle, setIsCircle] = useState(true);

  const handleImgStateChanged = (val: number) => {
    console.log('图片状态：', val);
    setImgState(() => val);
  };

  const handleCustomSetting = (val: number) => {
    setCustomLoading(val === 1);
  };

  const handleCustomError = (val: number) => {
    setCustomError(val === 1);
  };

  const handleShapeChanged = (val: number) => {
    setIsCircle(val !== 1);
  };

  const items = [
    {
      states: ['加载成功', '加载中', '加载失败'],
      states_en: ['loaded', 'loading', 'error'],
      label: '状态',
      label_en: 'Status',
      selected: 0,
      selectedChanged: handleImgStateChanged,
    },
    {
      states: ['默认', '自定义'],
      states_en: ['default', 'custom'],
      label: '加载中状态',
      label_en: 'Loading status',
      selected: 0,
      selectedChanged: handleCustomSetting,
    },
    {
      states: ['默认', '自定义'],
      states_en: ['default', 'custom'],
      label: '加载失败状态',
      label_en: 'Loading failure status',
      selected: 0,
      selectedChanged: handleCustomError,
    },
    {
      states: ['方形', '圆形'],
      states_en: ['cube', 'circle'],
      label: '形状',
      label_en: 'Shape',
      selected: 0,
      selectedChanged: handleShapeChanged,
    },
  ];

  return (
    <View style={styles.main}>
      <View style={styles.warp}>
        <ImageWithStatus
          size={150}
          state={imgState}
          loading={
            customLoading ? (
              <RotatingComponent type="circle" rotate={true} />
            ) : undefined
          }
          error={customError ? <Text>加载错误</Text> : undefined}
          shape={isCircle ? 'circle' : 'cube'}
          src="https://reactnative.dev/img/tiny_logo.png"
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
  },
  main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  configWrap: {
    padding: 10,
  },
});

export default Images;
