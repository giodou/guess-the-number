import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 48,
    color: theme.colors.boardTitle,
    borderRadius: 1,
    fontFamily: theme.fonts.screenTitle,
    fontSize: 25,
    marginRight: 4,
    textAlign: 'center',
    borderBottomWidth: 3,
    borderColor: theme.colors.boardTitle,
    marginVertical: 8,
    fontWeight: 'bold'
  }
});