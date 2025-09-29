import { StatusBar, StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Final() {
  const router = useRouter();

  const handleNovaReflexao = () => {
    router.push("/");
  };

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#A8FBD3" />
      <View style={styles.container}>
        <Text style={styles.text}>
          Parabéns por se expressar! Cuidar dos seus sentimentos é um passo importante. 😊
        </Text>

        <Pressable style={styles.button} onPress={handleNovaReflexao}>
          <Text style={styles.buttonText}>Fazer nova reflexão</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A8FBD3",
  },
  container: {
    width: 220,
    minHeight: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 22,
    color: '#333',
  },
  button: {
    backgroundColor: '#20B2AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});