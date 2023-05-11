import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
    backgroundColor: theme.colors.primary,
  },
  label: {
    fontFamily: theme.fonts.fontFamily.regular,
    fontSize: theme.fonts.fontSize.text,
    color: theme.colors.text,
    paddingBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
});
