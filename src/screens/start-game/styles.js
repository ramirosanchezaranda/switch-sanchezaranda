import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fonts.fontSize.title,
    color: theme.colors.text,
    textAlign: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    backgroundColor: theme.colors.primary,
  },
  label: {
    fontSize: theme.fonts.fontSize.text,
    color: theme.colors.text,
    paddingVertical: 20,
    textAlign: 'center',
  },
  input: {
    width: '40%',
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1,
    minWidth: 80,
    textAlign: 'center',
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
});
