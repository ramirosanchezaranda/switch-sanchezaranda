import { View } from 'react-native';

import { StartGame } from './screens';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
}
