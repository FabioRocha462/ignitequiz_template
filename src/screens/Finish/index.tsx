import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Stars } from '../../components/Starts';

import { Button } from '../../components/Button';

import { styles } from './styles';

interface Params {
  total: string;
  points: string;
}


export function Finish() {
  const route = useRoute();
  const { points, total } = route.params as Params;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
          {
              Number(points) === 3 ? 
                    <Stars />
              : 
              <Text style={styles.title}> Ah, você pode fazer melhor </Text>
            }
      <View style={styles.message}>
        <Text style={styles.title}>
            {
              Number(points) === 3 ? 
              <Text> Parábens</Text>
              : 
              <Text> Tente outra vez </Text>
            }
        </Text>

        <Text style={styles.subtitle}>
          Você acertou {points} de {total} questões
        </Text>
      </View>

      <Button
        title="Ir para o início"
        onPress={() => navigate('home')}
      />
    </View>
  );
}