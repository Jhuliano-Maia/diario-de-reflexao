import { StatusBar, StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

export default function Index() {
  const { feeling } = useLocalSearchParams<{ feeling?: string }>();
  const router = useRouter();
  const [inputText, setInputText] = useState('');

  const handleConcluir = () => {
    router.push("/tabs/final");
  };

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#A8FBD3" />
      <View style={styles.container}>
        {feeling === "happy" && (
          <Text style={styles.text}>
            Que bom que você está feliz! Continue com essa energia positiva, ela é contagiante! Lembre-se de aproveitar cada momento e de que a felicidade está nas pequenas coisas. 😊
          </Text>
        )}
        {feeling === "sad" && (
          <Text style={styles.text}>
            Está tudo bem se sentir triste. As emoções vêm e vão, e se permitir sentir a tristeza é uma forma de cuidado consigo mesmo. Lembre-se que você é forte, e dias melhores virão. 💙
          </Text>
        )}

        <TextInput
          style={styles.textInput}
          placeholder="Escreva como você se sente..."
          multiline
          onChangeText={setInputText}
          value={inputText}
        />

        <Pressable
          style={[
            styles.button,
            { backgroundColor: inputText.length > 0 ? '#20B2AA' : '#ccc' }
          ]}
          onPress={inputText.length > 0 ? handleConcluir : null}
        >
          <Text style={styles.buttonText}>Concluir</Text>
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
    minHeight: 350,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 16,
    justifyContent: "center",
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
    marginBottom: 15,
    lineHeight: 22,
    color: '#333',
  },
  textInput: {
    width: "100%",
    minHeight: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});