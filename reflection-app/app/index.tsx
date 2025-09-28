import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const [feeling, setFeeling] = useState<string | null>(null);

  function handleNavigationToHome(feeling: string) {
    router.push({
      pathname: "/tabs/home",
      params: { feeling },
    });
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#A8FBD3" />

      <View style={styles.container}>
        <Text style={styles.text}>Como você está se sentindo hoje?</Text>
        <Text style={styles.text2}>Escolha um emoji que represente seu estado de espírito atual</Text>

        <View style={styles.emojiContainer}>
          <Pressable style={styles.emojiButton} onPress={() => handleNavigationToHome("happy")}>
            <Text style={styles.emoji}>😀</Text>
          </Pressable>

          <Pressable style={styles.emojiButton} onPress={() => handleNavigationToHome("sad")}>
            <Text style={styles.emoji}>😢</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",  
    alignItems: "center",    
    backgroundColor: '#A8FBD3',  
  },
  container: {
    width: 220,
    height: 250,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },
  text2: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  emojiButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  emoji: {
    fontSize: 28,
  },
});
