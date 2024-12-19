import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { playSound } from './utils/soundPlayer';

const App: React.FC = () => {
  const [activeNote, setActiveNote] = useState(''); 
  const [isRecording, setIsRecording] = useState(false); 
  const [sequence, setSequence] = useState<string[]>([]); 


  const notes = ['DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI'];

  
  const handlePress = async (note: string) => {
    setActiveNote(note);
    await playSound(note); 
    setActiveNote('');

    if (isRecording) {
      setSequence((prevSequence) => [...prevSequence, note]);
    }
  };

  
  const startRecording = () => {
    setSequence([]); 
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

 
  const playSequence = async () => {
    for (const note of sequence) {
      setActiveNote(note);
      await playSound(note);
      await new Promise((resolve) => setTimeout(resolve, 500)); 
    setActiveNote('');
  }
}

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image.png')} 
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>PIANO INTERACTIVO</Text>
      <Text style={styles.subtitle}>Aprende escuchando</Text>

      <View style={styles.piano}>
        {notes.map((note) => (
          <TouchableOpacity
            key={note}
            style={[
              styles.key,
              activeNote === note ? styles.keyActive : null,
            ]}
            onPress={() => handlePress(note)}
          >
            <Text style={styles.keyText}>{note}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={isRecording ? stopRecording : startRecording}
        >
          <Text style={styles.buttonText}>
            {isRecording ? 'DETENER' : 'GRABAR'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={playSequence}
          disabled={sequence.length === 0}
        >
          <Text style={styles.buttonText}>REPRODUCIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5ff72',
    paddingTop: 40,
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00c7c7',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#00c7c7',
    marginBottom: 20,
  },
  piano: {
    flexDirection: 'row',
    backgroundColor: '#e5ff72',
    padding: 20,
    borderRadius: 15,
  },
  key: {
    width: 50,
    height: 200,
    margin: 5,
    backgroundColor: '#36d1e5',
    borderColor: '#a33bca',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyActive: {
    backgroundColor: '#29a9c7',
  },
  keyText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
  button: {
    backgroundColor: '#36d1e5',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default App