import { Text, TextInput, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import { Card, Header } from '../../components';
import { theme } from '../../constants/theme';

const StartGame = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header title="WELCOME!" />
        <Text style={styles.title}>START GAME</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Write a number</Text>
          <TextInput
            placeholder="0"
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
          />
          <View style={styles.buttonContainer}>
            <Button title="reset" onPress={() => {}} color={theme.colors.secondary} />
            <Button title="Confirm" onPress={() => {}} color={theme.colors.secondary} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
