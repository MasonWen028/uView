import {setLang} from '@/stores/modules/langStore';
import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import i18n from '@/utils/i18n';

function I18nSwitcher(): React.JSX.Element {
  const dispatch = useDispatch();

  const {lang} = useSelector((state: any) => state.lang);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [animationRuning, setAnimationRuning] = useState(false);

  const switchLang = () => {
    setAnimationRuning(() => true);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start(() => {
      const targetLang = lang === 'en' ? 'zh' : 'en';
      i18n.changeLanguage(targetLang);
      dispatch(setLang(targetLang));
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start();
      setAnimationRuning(() => false);
    });
  };

  return (
    <TouchableOpacity
      style={styles.switchContainer}
      onPress={switchLang}
      disabled={animationRuning}>
      <View>
        <View style={styles.acssLlcihc}>
          <Text style={styles.fronter}>{lang === 'en' ? 'En' : '中'}</Text>
          <Text style={styles.backer}>{lang !== 'en' ? 'En' : '中'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    color: '#000000E0',
    borderColor: '#d9d9d9',
    padding: 1,
    width: responsiveFontSize(4),
    height: responsiveFontSize(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderRadius: responsiveFontSize(0.4),
  },
  acssLlcihc: {
    position: 'relative',
    top: 2,
    width: responsiveFontSize(3.75),
    height: responsiveFontSize(3.75),
  },
  fronter: {
    position: 'absolute',
    left: '5%',
    top: 0,
    zIndex: 1,
    backgroundColor: '#000000E0',
    color: '#ffffff',
    fontSize: responsiveFontSize(2.25),
    lineHeight: responsiveFontSize(2.8),
    borderWidth: 1,
    borderColor: '#000000E0',
  },
  backer: {
    position: 'absolute',
    right: '5%',
    bottom: 1,
    zIndex: 0,
    fontSize: responsiveFontSize(2.25),
    lineHeight: responsiveFontSize(2.25),
    borderWidth: 1,
    borderColor: '#000000E0',
    color: '#000000E0',
  },
});

export default I18nSwitcher;
