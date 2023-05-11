import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { theme } from './constants/theme';
import { Game, StartGame } from './screens';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    'Epilogue-Regular': require('../assets/fonts/Epilogue-Regular.ttf'),
    'Epilogue-Bold': require('../assets/fonts/Epilogue-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const Content = () =>
    userNumber ? <Game userNumber={userNumber} /> : <StartGame onStartGame={onStartGame} />;

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
}
