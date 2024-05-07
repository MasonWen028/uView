import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import color from '@/utils/color';
import I18nSwitcher from '@/components/I18nSwicher';
import {useTranslation} from 'react-i18next';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

// interface PageNavProps {
//   desc?: string;
// }

function PageNav(): React.JSX.Element {
  const {t} = useTranslation();

  return (
    <>
      <View style={styles.navWrap}>
        <View style={styles.navTitle}>
          <Image
            style={styles.logo}
            source={require('assets/images/logo.png')}
          />
          <View style={styles.navInfo}>
            <Text style={styles.navTitleText}>{t('common.title')}</Text>
            <Text style={styles.navSlogan}>{t('common.intro')}</Text>
          </View>
        </View>
        <View style={styles.navDesc}>
          <Text>{t('components.desc')}</Text>
        </View>
        <View style={styles.lang}>
          <I18nSwitcher />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navWrap: {
    padding: responsiveFontSize(2),
    position: 'relative',
  },
  lang: {
    position: 'absolute',
    top: responsiveFontSize(2),
    right: responsiveFontSize(2),
  },
  navTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navInfo: {
    marginLeft: responsiveFontSize(2),
  },
  navTitleText: {
    display: 'flex',
    color: color.mainColor,
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  logo: {
    width: responsiveFontSize(5),
    height: responsiveFontSize(5),
  },
  navSlogan: {
    marginTop: 0,
    fontSize: responsiveFontSize(1.8),
    color: color.tipsColor,
    paddingRight: 1,
  },
  navDesc: {
    marginTop: responsiveFontSize(1),
    fontSize: responsiveFontSize(1.8),
    color: color.contentColor,
  },
});

export default PageNav;
