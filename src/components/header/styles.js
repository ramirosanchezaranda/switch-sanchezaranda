import { StyleSheet } from 'react-native';

import { theme } from './../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.fonts.fontSize.title,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
