import { useState } from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from './styles';
import { Header, Card, NumberContainer } from '../../components';
import { theme } from '../../constants/theme';

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;
const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
};

const Game = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(MIN_NUMBER, MAX_NUMBER, userNumber)
  );

  const handlerMenorButton = () => {
    if (currentGuess > userNumber) {
      const randomNumber = generateRandomNumber(MIN_NUMBER, currentGuess - 1, currentGuess);
      setCurrentGuess(randomNumber);
    }
  };

  const handlerMayorButton = () => {
    if (currentGuess < userNumber) {
      const randomNumber = generateRandomNumber(currentGuess + 1, MAX_NUMBER, currentGuess);
      setCurrentGuess(randomNumber);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="GAME!" />
      <Card style={styles.cardContainer}>
        <Text style={styles.label}>El oponente cree que es el: </Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button title="MENOR" onPress={handlerMenorButton} color={theme.colors.secondary} />
          <Button title="MAYOR" onPress={handlerMayorButton} color={theme.colors.secondary} />
        </View>
      </Card>
    </View>
  );
};

export default Game;
