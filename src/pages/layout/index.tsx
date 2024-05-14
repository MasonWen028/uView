import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

const Layout = () => {
  const [columns, setColumns] = useState(3); // 栅格列数
  const [offset, setOffset] = useState(0); // 分栏偏移
  const [justifyContent, setJustifyContent] = useState('flex-start'); // 水平排列方式

  // eslint-disable-next-line react/no-unstable-nested-components
  const Column = ({children, style}) => (
    <View style={[styles.column, style]}>
      <Text style={styles.columnText}>{children}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>layout-栅格布局</Text>

      {/* 演示效果 */}
      <View style={styles.demoContainer}>
        <View style={[styles.row, {justifyContent}]}>
          {Array.from({length: columns}).map((_, index) => (
            <Column
              key={index}
              style={{marginLeft: index === 0 ? offset * 10 : 0}}>
              {index + 1}
            </Column>
          ))}
        </View>
      </View>

      {/* 参数配置 */}
      <View style={styles.controlsContainer}>
        <Text style={styles.subtitle}>每个栅格占用栏数（演示共3个栅格）</Text>
        <View style={styles.buttonGroup}>
          {[1, 2, 3, 4].map(num => (
            <TouchableOpacity
              key={num}
              style={[
                styles.controlButton,
                columns === num && styles.activeButton,
              ]}
              onPress={() => setColumns(num)}>
              <Text>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.subtitle}>分栏偏移</Text>
        <View style={styles.buttonGroup}>
          {[0, 1, 2, 3].map(num => (
            <TouchableOpacity
              key={num}
              style={[
                styles.controlButton,
                offset === num && styles.activeButton,
              ]}
              onPress={() => setOffset(num)}>
              <Text>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.subtitle}>水平排列方式</Text>
        <View style={styles.buttonGroup}>
          {['flex-start', 'flex-end', 'space-around', 'space-between'].map(
            option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.controlButton,
                  justifyContent === option && styles.activeButton,
                ]}
                onPress={() => setJustifyContent(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  demoContainer: {
    flex: 1,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  column: {
    flex: 1,
    height: 50,
    backgroundColor: '#b0c4de',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  columnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  controlsContainer: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  controlButton: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#ddd',
  },
});

export default Layout;
