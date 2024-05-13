import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

/**
 * withFlatList - 高阶组件封装 FlatList
 * @param {React.ComponentType<any>} Component - 用于 renderItem 的组件
 * @param {object} listProps - 静态的或默认的 FlatList 属性
 * @returns {React.ComponentType<any>} - 返回一个新的组件
 */
const withFlatList = (Component: React.ComponentType, listProps = {}) => {
  // 返回一个接收外部数据的组件
  return ({data, keyExtractor, style, ...props}: FlatListProps<any>) => (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({item, index}) => (
        <Component {...item} index={index} {...props} />
      )}
      style={style}
      {...listProps}
    />
  );
};

export default withFlatList;
